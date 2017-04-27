const MixinStyles = {
  'clearfix': {
    ':after': {
      'content': '',
      'display': 'block',
      'clear': 'both'
    }
  },
  'resetButton': {
    'appearance': 'none',
    'box-shadow': 'none',
    'outline': 'none',
    'cursor': 'pointer',
    'background': 'none',
    'border': 'none',
    'margin': 0,
    'padding': 0,
    'overflow': 'hidden',
    'box-sizing': 'border-box',
    'display': 'block',
    'width': '100%',
    'max-width': 'none',
    'text-align': 'left',
    'text-decoration': 'none',
    '&::-moz-focus-inner': {
      'border': 0,
      'padding': 0
    }
  }
};

export default MixinStyles;