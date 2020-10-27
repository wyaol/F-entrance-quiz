import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/students').then((response) => {
      this.setState({
        persons: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h3>学员列表</h3>
        <div>
          {this.state.persons.map((person) => (
            <div key={person.id}>
              <div>
                {person.id}:{person.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
