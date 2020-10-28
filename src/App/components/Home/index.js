import React, { Component } from 'react';
import PersonList from '../PersonList';
import GroupList from '../GroupList';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* TODO GTB-知识点: + 划分两个组件 */}
        <GroupList />
        <PersonList />
      </div>
    );
  }
}

export default Home;
