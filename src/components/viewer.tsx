import * as React from 'react';
import * as _ from 'lodash';

import { css } from 'aphrodite';
import styles from './viewer-style';

export interface ViewerProps {
  srces: string[]; // srcs includes src of the images
  index: number; // number indicates active image index
}

class Viewer extends React.Component<ViewerProps, {}> {
  render() {
    return (
      <div>
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
