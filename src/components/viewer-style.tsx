import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  'list': {
    'display': 'block',
    'margin': 0,
    'padding': 0,
    'fontSize': 0,
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'wordWrap': 'keep-all'
  },
  'item': {
    'display': 'inline-block',
    'width': '100%',
    'transition': 'margin-left 0.6s ease-in-out'
  },
  image: {
    'display': 'block',
    'margin': '0 auto',
    'height': '100%',
    'width': 'auto'
  }
});

export default styles;
