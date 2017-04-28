import * as assign from 'object-assign';
import { StyleSheet } from 'aphrodite';
import MixinStyles from './mixin-styles';

const itemStyle = {
  'display': 'inline',
  'float': 'left',
  'margin': 0,
  'padding': 0,
  'border': '2px solid #ccc',
  'border-right-width': '1px',
  'box-sizing': 'border-box',
  ':last-child': {
    'border-right-width': '2px',
  }
};

const buttonStyle = assign({}, MixinStyles.resetButton, {
  'height': 50
});

const styles = StyleSheet.create({
  'list': assign({}, MixinStyles.clearfix, {
    'display': 'block',
    'margin': 0,
    'padding': 0
  }),
  'item': itemStyle,
  'item-active': assign({}, itemStyle, { 'border': '2px solid #72b1c0' }),
  'button': buttonStyle,
  'image': {
    'display': 'block',
    'width': 'auto',
    'height': '100%',
    'margin': '0 auto',
    'transition': 'transform 0.2s ease-in-out',
    ':hover': {
      'transform': 'scale(1.2)'
    }
  }
});

export default styles;
