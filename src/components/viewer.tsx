import * as React from 'react';
import * as _ from 'lodash';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  'viewer': {
    'display': 'block',
    'maxWidth': 600,
    'margin': '0 auto'
  },
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

export interface ViewerProps {
  srces: string[]; // srcs includes src of the images
  index: number; // number indicates active image index
}

class Viewer extends React.Component<ViewerProps, {}> {
  render() {
    return (
      <div className={css(styles.viewer)}>
        <ul className={css(styles.list)}>
          {this._resolveItems()}
        </ul>
      </div>
    );
  }

  _resolveItems() {
    return _.map(this.props.srces, (src, index) => {
      const style = {
        marginLeft: index == 0 ? `${-100 * this.props.index}%` : 'auto'
      };
      return (
        <li key={index} className={css(styles.item)} style={style}>
          <img className={css(styles.image)} src={src} alt={index.toString()}/>
        </li>
      );
    });
  }
}

export default Viewer;
