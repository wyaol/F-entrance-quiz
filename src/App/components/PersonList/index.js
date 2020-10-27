import React, { Component } from 'react';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    this.setState({
      persons: [
        {
          id: 1,
          name: 'test',
        },
      ],
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
