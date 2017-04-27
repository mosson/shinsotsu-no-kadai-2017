import * as React from 'react';
import * as _ from 'lodash';

import * as assign from 'object-assign';

import { StyleSheet, css } from 'aphrodite';
import MixinStyles from './mixin-styles';

export interface ControllerProps {
  srces: string[]; // srcs includes src of the images
  index: number; // number indicates active image index
  update: (index: number) => void; // update is function thats updates active image index
}

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
  'controller': {
    'display': 'block',
    'maxWidth': 600,
    'margin': '0 auto'
  },
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

class Controller extends React.Component<ControllerProps, {}> {
  render() {
    return (
      <div className={css(styles.controller)}>
        <ul className={css(styles.list)}>
          {this._resolveItems()}
        </ul>
      </div>
    );
  }

  _resolveItems() {
    return _.map(this.props.srces, (src, index) => {
      const style = {
        width: `${100 / this.props.srces.length}%`
      };

      return (
        <li key={index} className={css(index == this.props.index ? styles['item-active'] : styles.item)} style={style}>
          <button type="button"
            className={css(styles.button)}
            onClick={this.props.update.bind(this, index)}>
            <img className={css(styles.image)} src={src} alt={index.toString()} />
          </button>
        </li>
      );
    })
  }
}

export default Controller;
