import tokens from './../assets/_new/styles/tokens.scss'
// import branding from './../assets/styles/imports/_branding.scss'

const styleData = tokens

const STYLE = {
  light: {
    general: {
      color: styleData.textColorBase,
      colorButtonClear: '#1976d2',
      colorButton: '#fff',
      backgroundColorButton: '#1976d2',
      backgroundInput: '#fff',
      colorPlaceholder: styleData.textColorSoft,
      colorCaret: '#1976d2',
      colorSpinner: styleData.colorPrimary,
      borderStyle: '1px solid #e1e4e8',
      backgroundScrollIcon: '#fff',
    },

    container: {
      border: 'none',
      borderRadius: styleData.borderRadiusBase,
      boxShadow: styleData.boxShadowBase,
    },

    header: {
      background: styleData.backgroundColorSoft,
      colorRoomName: styleData.textColorBase,
      colorRoomInfo: styleData.textColorSoft,
    },

    footer: {
      background: styleData.backgroundColorSoft,
      borderStyleInput: '1px solid #e1e4e8',
      borderInputSelected: '#1976d2',
      backgroundReply: styleData.backgroundColorSoft,
      backgroundTagActive: styleData.backgroundColorSoft,
      backgroundTag: styleData.backgroundColorBase,
    },

    content: {
      background: styleData.backgroundColorBase,
    },

    sidemenu: {
      background: '#fff',
      backgroundHover: '#f6f6f6',
      backgroundActive: styleData.colorPrimaryLight,
      colorActive: '#1976d2',
      borderColorSearch: '#e1e5e8',
    },

    dropdown: {
      background: '#fff',
      backgroundHover: '#f6f6f6',
    },

    message: {
      background: styleData.chatMessageBgOthers,
      backgroundMe: styleData.chatMessageBgMe,
      color: styleData.chatMessageColor,
      colorStarted: '#9ca6af',
      backgroundDeleted: '#dadfe2',
      backgroundSelected: '#c2dcf2',
      colorDeleted: '#757e85',
      colorUsername: '#9ca6af',
      colorTimestamp: '#828c94',
      backgroundDate: '#e5effa',
      colorDate: '#505a62',
      backgroundSystem: '#e5effa',
      colorSystem: '#505a62',
      backgroundMedia: 'rgba(0, 0, 0, 0.15)',
      backgroundReply: 'rgba(0, 0, 0, 0.08)',
      colorReplyUsername: '#0a0a0a',
      colorReply: '#6e6e6e',
      colorTag: '#0d579c',
      backgroundImage: '#ddd',
      colorNewMessages: styleData.chatNewMessageColor,
      backgroundScrollCounter: '#0696c7',
      colorScrollCounter: '#fff',
      backgroundReaction: '#eee',
      borderStyleReaction: '1px solid #eee',
      backgroundReactionHover: '#fff',
      borderStyleReactionHover: '1px solid #ddd',
      colorReactionCounter: '#0a0a0a',
      backgroundReactionMe: '#cfecf5',
      borderStyleReactionMe: '1px solid #3b98b8',
      backgroundReactionHoverMe: '#cfecf5',
      borderStyleReactionHoverMe: '1px solid #3b98b8',
      colorReactionCounterMe: '#0b59b3',
      backgroundAudioRecord: '#eb4034',
      backgroundAudioLine: 'rgba(0, 0, 0, 0.15)',
      backgroundAudioProgress: '#455247',
      backgroundAudioProgressSelector: '#455247',
      colorFileExtension: '#757e85',
    },

    markdown: {
      background: 'rgba(239, 239, 239, 0.7)',
      border: 'rgba(212, 212, 212, 0.9)',
      color: '#e01e5a',
      colorMulti: '#0a0a0a',
    },

    room: {
      colorUsername: '#0a0a0a',
      colorMessage: '#67717a',
      colorTimestamp: '#a2aeb8',
      colorStateOnline: '#4caf50',
      colorStateOffline: '#9ca6af',
      backgroundCounterBadge: '#0696c7',
      colorCounterBadge: '#fff',
    },

    emoji: {
      background: '#fff',
    },

    icons: {
      search: '#9ca6af',
      add: styleData.colorPrimary,
      toggle: styleData.colorNeutral30,
      menu: styleData.colorNeutral30,
      close: '#9ca6af',
      closeImage: '#fff',
      file: styleData.colorPrimary,
      paperclip: styleData.colorPrimary,
      closeOutline: '#000',
      closePreview: '#fff',
      send: styleData.colorPrimary,
      sendDisabled: '#9ca6af',
      emoji: styleData.colorPrimary,
      emojiReaction: 'rgba(0, 0, 0, 0.3)',
      document: styleData.colorPrimary,
      pencil: '#9e9e9e',
      checkmark: '#9e9e9e',
      checkmarkSeen: '#0696c7',
      eye: '#fff',
      dropdownMessage: '#fff',
      dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
      dropdownRoom: '#9e9e9e',
      dropdownScroll: '#0a0a0a',
      microphone: styleData.colorPrimary,
      audioPlay: '#455247',
      audioPause: '#455247',
      audioCancel: '#eb4034',
      audioConfirm: '#1ba65b',
    },
  },
  dark: {
    general: {
      color: '#fff',
      colorButtonClear: '#fff',
      colorButton: '#fff',
      backgroundColorButton: '#1976d2',
      backgroundInput: '#202223',
      colorPlaceholder: '#596269',
      colorCaret: '#fff',
      colorSpinner: '#fff',
      borderStyle: 'none',
      backgroundScrollIcon: '#fff',
    },

    container: {
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    },

    header: {
      background: '#181a1b',
      colorRoomName: '#fff',
      colorRoomInfo: '#9ca6af',
    },

    footer: {
      background: '#131415',
      borderStyleInput: 'none',
      borderInputSelected: '#1976d2',
      backgroundReply: '#1b1c1c',
      backgroundTagActive: '#1b1c1c',
      backgroundTag: '#131415',
    },

    content: {
      background: '#131415',
    },

    sidemenu: {
      background: '#181a1b',
      backgroundHover: '#202224',
      backgroundActive: '#151617',
      colorActive: '#fff',
      borderColorSearch: '#181a1b',
    },

    dropdown: {
      background: '#2a2c33',
      backgroundHover: '#26282e',
    },

    message: {
      background: '#22242a',
      backgroundMe: '#1f7e80',
      color: '#fff',
      colorStarted: '#9ca6af',
      backgroundDeleted: '#1b1c21',
      backgroundSelected: '#c2dcf2',
      colorDeleted: '#a2a5a8',
      colorUsername: '#b3bac9',
      colorTimestamp: '#ebedf2',
      backgroundDate: 'rgba(0, 0, 0, 0.3)',
      colorDate: '#bec5cc',
      backgroundSystem: 'rgba(0, 0, 0, 0.3)',
      colorSystem: '#bec5cc',
      backgroundMedia: 'rgba(0, 0, 0, 0.18)',
      backgroundReply: 'rgba(0, 0, 0, 0.18)',
      colorReplyUsername: '#fff',
      colorReply: '#d6d6d6',
      colorTag: '#f0c60a',
      backgroundImage: '#ddd',
      colorNewMessages: '#fff',
      backgroundScrollCounter: '#1976d2',
      colorScrollCounter: '#fff',
      backgroundReaction: 'none',
      borderStyleReaction: 'none',
      backgroundReactionHover: '#202223',
      borderStyleReactionHover: 'none',
      colorReactionCounter: '#fff',
      backgroundReactionMe: '#4e9ad1',
      borderStyleReactionMe: 'none',
      backgroundReactionHoverMe: '#4e9ad1',
      borderStyleReactionHoverMe: 'none',
      colorReactionCounterMe: '#fff',
      backgroundAudioRecord: '#eb4034',
      backgroundAudioLine: 'rgba(255, 255, 255, 0.15)',
      backgroundAudioProgress: '#b7d4d3',
      backgroundAudioProgressSelector: '#b7d4d3',
      colorFileExtension: '#a2a5a8',
    },

    markdown: {
      background: 'rgba(239, 239, 239, 0.7)',
      border: 'rgba(212, 212, 212, 0.9)',
      color: '#e01e5a',
      colorMulti: '#0a0a0a',
    },

    room: {
      colorUsername: '#fff',
      colorMessage: '#6c7278',
      colorTimestamp: '#6c7278',
      colorStateOnline: '#4caf50',
      colorStateOffline: '#596269',
      backgroundCounterBadge: '#1976d2',
      colorCounterBadge: '#fff',
    },

    emoji: {
      background: '#343740',
    },

    icons: {
      search: '#596269',
      add: '#fff',
      toggle: '#fff',
      menu: '#fff',
      close: '#9ca6af',
      closeImage: '#fff',
      file: '#1976d2',
      paperclip: '#fff',
      closeOutline: '#fff',
      closePreview: '#fff',
      send: '#fff',
      sendDisabled: '#646a70',
      emoji: '#fff',
      emojiReaction: '#fff',
      document: '#1976d2',
      pencil: '#ebedf2',
      checkmark: '#ebedf2',
      checkmarkSeen: '#f0d90a',
      eye: '#fff',
      dropdownMessage: '#fff',
      dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
      dropdownRoom: '#fff',
      dropdownScroll: '#0a0a0a',
      microphone: '#fff',
      audioPlay: '#b7d4d3',
      audioPause: '#b7d4d3',
      audioCancel: '#eb4034',
      audioConfirm: '#1ba65b',
    },
  },
}

export default {
  STYLE,
}
