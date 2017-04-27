import * as React from 'react';

import Viewer from './viewer';
import Controller from './controller';

export interface AppProps {
  srces: string[]; // srcs includes src of the images
}

export interface AppState {
  index: number; // number indicates active image index
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props);

    this.state = {
      index: 0
    };
  }

  render() {
    return (
      <div>
        <Viewer srces={this.props.srces} index={this.state.index} />
        <Controller srces={this.props.srces} index={this.state.index} update={this.update.bind(this)} />
      </div>
    );
  }

  update(index: number): void {
    this.setState({
      index: index
    });
  }
}

export default App;
