import React, { Component } from 'react';
import axios from 'axios';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.getGroups();
  }

  group = () => {
    axios.post('http://127.0.0.1:8080/groups');
    this.getGroups();
  };

  getGroups = () => {
    axios.get('http://127.0.0.1:8080/groups').then((response) => {
      if (response.data != null) {
        this.setState({
          groups: response.data,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <h3>分组列表</h3>
        <button type="submit" onClick={() => this.group()}>
          分组
        </button>
        <div>
          {this.state.groups.map((group) => (
            <div key={group.groupName}>
              <div>{group.groupName}</div>
              {group.students.map((student) => (
                <div>
                  {student.id}: {student.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupList;
