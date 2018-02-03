import React, { Component } from 'react';
import Card from "./components/Card";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { flip: false };
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.setState({
      flip: !this.state.flip
    });    
  }
  
  render() {
    return (
      <div>
        <Card 
          flip={this.state.flip}
          orientation="vertical" />

          <p>
            <button 
              onClick={this.flip}>
              Flip
            </button>
          </p>  
      </div>  
    );
  }
}

export default App;
