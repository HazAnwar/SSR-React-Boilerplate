import React, { Component } from 'react';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialise any props
    };
    //bind props to any functions
  }

  componentDidMount() {
    // after SSR complete
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Home;
