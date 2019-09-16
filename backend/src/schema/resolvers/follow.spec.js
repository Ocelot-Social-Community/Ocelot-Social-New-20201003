import { GraphQLClient } from 'graphql-request'
import { createTestClient } from 'apollo-server-testing'
import Factory from '../../seed/factories'
import { host, gql } from '../../jest/helpers'
import { neode as getNeode, getDriver } from '../../bootstrap/neo4j'
import createServer from '../../server'

const driver = getDriver()
const neode = getNeode()
const factory = Factory()

let authenticatedUser, variables, mutate, currentUser, followedUser, query

const mutationFollowUser = gql`
  mutation($id: ID!, $type: FollowTypeEnum) {
    follow(id: $id, type: $type)
  }
`
const mutationUnfollowUser = gql`
  mutation($id: ID!, $type: FollowTypeEnum) {
    unfollow(id: $id)
  }
`

beforeAll(() => {
  authenticatedUser = undefined
  const { server } = createServer({
    context: () => {
      return {
        driver,
        user: authenticatedUser,
        neode,
        cypherParams: {
          currentUserId: authenticatedUser ? authenticatedUser.id : null,
        },
      }
    },
  })
  mutate = createTestClient(server).mutate
  query = createTestClient(server).query
})

beforeEach(async () => {
  variables = {}
  currentUser = await factory.create('User', {
    id: 'current-user',
    email: 'test@example.org',
    password: '1234',
  })
  followedUser = await factory.create('User', {
    id: 'followed-user',
    email: 'test2@example.org',
    password: '1234',
  })

  authenticatedUser = null
})

afterEach(async () => {
  await factory.cleanDatabase()
})

describe('follow', () => {
  describe('follow user', () => {
    describe('unauthenticated follow', () => {
      it('throws authorization error', async () => {
        variables = { ...variables, id: 'followed-user' }
        const { errors } = await mutate({ mutation: mutationFollowUser, variables })
        expect(errors[0]).toHaveProperty('message', 'Not Authorised!')
      })
    })

    describe('authenticated follow', () => {
      beforeEach(async () => {
        authenticatedUser = await currentUser.toJson()
      })

      it.only('I can follow another user', async () => {
        const expected = {
          data: {
            follow: true,
          },
        }
        variables = { ...variables, id: 'followed-user', type: 'User' }
        await expect(mutate({ mutation: mutationFollowUser, variables })).resolves.toMatchObject(
          expected,
        )

        const followedUserQuery = gql`
          query($id: ID) {
            User(id: $id) {
              followedBy {
                id
                name
              }
              followedByCurrentUser
            }
          }
        `

        const expectedFollowedUser = {
          data: { User: [{ followedBy: [{ id: 'current-user' }], followedByCurrentUser: true }] },
        }
        variables = { id: 'followed-user' }
        query({ query: followedUserQuery, variables })
        await expect(query({ query: followedUserQuery, variables })).resolves.toMatchObject(
          expectedFollowedUser,
        )
      })
    })

    it('I can`t follow myself', async () => {
      const res = await clientUser1.request(mutationFollowUser('u1'))
      const expected = {
        follow: false,
      }
      expect(res).toMatchObject(expected)

      const { User } = await clientUser1.request(`{
        User(id: "current-user") {
          followedBy { id }
          followedByCurrentUser
        }
      }`)
      const expected2 = {
        followedBy: [],
        followedByCurrentUser: false,
      }
      expect(User[0]).toMatchObject(expected2)
    })
  })
  describe('unfollow user', () => {
    describe('unauthenticated follow', () => {
      it('throws authorization error', async () => {
        // follow
        await clientUser1.request(mutationFollowUser('u2'))
        // unfollow
        const client = new GraphQLClient(host)
        await expect(client.request(mutationUnfollowUser('u2'))).rejects.toThrow('Not Authorised')
      })
    })

    it('I can unfollow a user', async () => {
      // follow
      await clientUser1.request(mutationFollowUser('u2'))
      // unfollow
      const expected = {
        unfollow: true,
      }
      const res = await clientUser1.request(mutationUnfollowUser('u2'))
      expect(res).toMatchObject(expected)

      const { User } = await clientUser1.request(`{
        User(id: "u2") {
          followedBy { id }
          followedByCurrentUser
        }
      }`)
      const expected2 = {
        followedBy: [],
        followedByCurrentUser: false,
      }
      expect(User[0]).toMatchObject(expected2)
    })
  })
})
