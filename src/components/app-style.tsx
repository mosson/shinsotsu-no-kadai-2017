import { StyleSheet } from 'aphrodite';

import * as assign from 'object-assign';
import MixinStyles from './mixin-styles';

const buttonStyle = assign({}, MixinStyles.resetButton, {
  'position': 'absolute',
  'top': '50%',
  'width': 50,
  'height': 100,
  'margin': '-50px 0 0 0',
  'background': '#444',
  'color': '#fff',
  'fontSize': '20px',
  'fontWeight': 'bold',
  'lineHeight': '100px',
  'textAlign': 'center'
});

const styles = StyleSheet.create({
  'container': {
    'display': 'block',
    'maxWidth': 600,
    'margin': '0 auto'
  },
  'viewer-container': {
    'display': 'block',
    'position': 'relative'
  },
  'back-button': assign({}, buttonStyle, {
    'left': 0
  }),
  'next-button': assign({}, buttonStyle, {
    'right': 0
  })
});

export default styles;
