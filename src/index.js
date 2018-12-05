import './style';
import { Component } from 'preact';

// components
import Tabs from './components/Tabs/Tabs';

export default class App extends Component {
  render () {
    return (
      <div>
        <Tabs />
      </div>
    );
  }
}
