import React from 'react';
import Menu from '../Menu';
import logo from '../../logo.svg';
import '../../App.css';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
				</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
				</a>
          </header>
        </div>
      </>
    )
  }
}
