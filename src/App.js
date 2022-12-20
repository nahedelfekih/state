import './App.css';
import React from 'react';
import Profile from './component/Profile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isVisible: false}
  }

  toggleVisibility = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
  return (
    <div className="App">
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
      </div>
      {this.state.isVisible && <Profile />}
    </div>
  );
}
}

export default App;