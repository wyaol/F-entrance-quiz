import React, { Component } from 'react';
import PersonList from '../PersonList';
import GroupList from '../GroupList';

class Home extends Component {
  render() {
    return (
      <div>
        <GroupList />
        <PersonList />
      </div>
    );
  }
}

export default Home;
