import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as t,o as a}from"./app-Blg-8n75.js";const s={};function i(r,e){return a(),n("div",null,e[0]||(e[0]=[t('<h1 id="components-–-code-guidelines" tabindex="-1"><a class="header-anchor" href="#components-–-code-guidelines"><span>Components – Code Guidelines</span></a></h1><h2 id="we-adhere-to-the-single-responsibility-principle" tabindex="-1"><a class="header-anchor" href="#we-adhere-to-the-single-responsibility-principle"><span>We adhere to the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" rel="noopener noreferrer">single responsibility principle</a></span></a></h2><p>Each component does <em>exactly one job</em>. The goal is to end up with many small components that are:</p><ul><li>easy to understand</li><li>easy to maintain</li><li>easy to reuse</li></ul><p><strong>How do you decide what is a separate component?</strong> Try to describe what it does in <em>one sentence</em>! When you find yourself using <code>and</code> and <code>or</code> the code you are talking about should probably be split up into two or more components.</p><p>On the other hand, when something is easily expressed in a few lines of HTML and SCSS and not likely to be reused this is a good indicator that it should <em>not</em> go into a separate component.</p><h2 id="we-compose-with-components" tabindex="-1"><a class="header-anchor" href="#we-compose-with-components"><span>We compose with components</span></a></h2><p>Usually <code>pages</code> use <code>layouts</code> as templates and will be composed of <code>features</code>. <code>features</code> are composed of <code>components</code>, the smallest building blocks of the app. The further down we go in this hierarchy the simpler and more generic the components become. Here is an example:</p><ul><li>The <code>index</code> page is responsible for displaying a list of posts. It uses the <code>default</code> layout and the <code>PostList</code> feature.</li><li>The <code>PostList</code> feature uses a <code>List</code> component to render <code>PostTeaser</code> features.</li><li>The <code>PostTeaser</code> feature consists of a <code>LayoutCard</code> wrapped around a <code>CardImage</code>, <code>CardTitle</code> and <code>CardContent</code> component.</li></ul><p>The <code>index</code> page is unique in the app and will never be reused. The <code>PostList</code> knows it is handling post data and can therefore not be used for anything else – but it can display posts on the <code>index</code> as well as the <code>user</code> page.</p><p>The <code>Card</code> on the other hand does not care about the type of data it needs to handle. It just takes whatever it receives and renders it in a certain way, so it can be reused throughout the app for many different features.</p><h2 id="we-use-two-word-names" tabindex="-1"><a class="header-anchor" href="#we-use-two-word-names"><span>We use two-word names</span></a></h2><p>We follow the W3C rules for naming custom elements as suggested in the <a href="https://vuejs.org/v2/guide/components-registration.html#Component-Names" target="_blank" rel="noopener noreferrer">Vue.js docs</a> to differentiate our own components from regular HTML elements in our templates.</p><p>Names should also be meaningful and unique to avoid confusion and code duplication, and also not too long to make them readable. Therefore: aim for two-word names, such as <code>layout-card</code>, <code>post-list</code> or <code>post-teaser</code>.</p><h2 id="recommended-reads" tabindex="-1"><a class="header-anchor" href="#recommended-reads"><span>Recommended reads</span></a></h2><p>For a deeper dive into the WHY and HOW have a look at the following resources which the above guidelines are based on:</p><ul><li><a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer">Atomic design</a></li><li><a href="https://medium.com/@wereheavyweight/how-were-using-component-based-design-5f9e3176babb" target="_blank" rel="noopener noreferrer">CDD – component based design</a></li><li><a href="https://pablohpsilva.github.io/vuejs-component-style-guide/#/" target="_blank" rel="noopener noreferrer">Vue.js component styleguide</a></li></ul>',17)]))}const c=o(s,[["render",i],["__file","components.html.vue"]]),p=JSON.parse('{"path":"/webapp/components.html","title":"Components – Code Guidelines","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"We adhere to the single responsibility principle","slug":"we-adhere-to-the-single-responsibility-principle","link":"#we-adhere-to-the-single-responsibility-principle","children":[]},{"level":2,"title":"We compose with components","slug":"we-compose-with-components","link":"#we-compose-with-components","children":[]},{"level":2,"title":"We use two-word names","slug":"we-use-two-word-names","link":"#we-use-two-word-names","children":[]},{"level":2,"title":"Recommended reads","slug":"recommended-reads","link":"#recommended-reads","children":[]}],"git":{"createdTime":1736228730000,"updatedTime":1736228730000,"contributors":[{"name":"Ulf Gebhardt","email":"ulf.gebhardt@webcraft-media.de","commits":1}]},"readingTime":{"minutes":1.42,"words":427},"filePathRelative":"webapp/components.md","localizedDate":"January 7, 2025","excerpt":"\\n<h2><a class=\\"header-anchor\\" href=\\"#we-adhere-to-the-single-responsibility-principle\\"><span>We adhere to the </span></a><a href=\\"https://en.wikipedia.org/wiki/Single_responsibility_principle\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">single responsibility principle</a></h2>\\n<p>Each component does <em>exactly one job</em>. The goal is to end up with many small components that are:</p>"}');export{c as comp,p as data};
