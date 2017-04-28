import * as React from 'react';
import * as _ from 'lodash';
import { css } from 'aphrodite';

import styles from './controller-style';

export interface ControllerProps {
  srces: string[]; // srcs includes src of the images
  index: number; // number indicates active image index
  update: (index: number) => void; // update is function thats updates active image index
}

class Controller extends React.Component<ControllerProps, {}> {
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
