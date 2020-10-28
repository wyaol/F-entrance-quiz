import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      addPerson: false,
      // TODO GTB-工程实践: * 这里的变量命名最好用一个表示状态的词，比如isEditing
    };
  }

  componentDidMount() {
    this.getPersons();
  }

  getPersons = () => {
    // TODO GTB-工程实践: * 前后端命名最好统一，不用一边person，一边student
    // TODO GTB-工程实践: * 建议把数据请求提取到单独的service（util）
    axios.get('http://127.0.0.1:8080/students').then((response) => {
      this.setState({
        persons: response.data,
      });
    });
  };

  addPerson = (name) => {
    axios.post('http://127.0.0.1:8080/students', { name }).then(() => {
      this.getPersons();
      this.setState({
        addPerson: false,
      });
    });
  };

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div>
          {/* TODO GTB-知识点: * 建议将单个学员这一块抽取成组件，可以在group 里面复用 */}
          {this.state.persons.map((person) => (
            <div key={person.id} className="person-button">
              {person.id}:{person.name}
            </div>
          ))}
          {/* TODO GTB-知识点: * 添加学员这一块也可以抽取成组件 */}
          {/* TODO GTB-知识点: * 这里用三元表达式可能简单一点 */}
          {/* TODO GTB-知识点: * 输入框最好支持自动focus */}
          {/* TODO GTB-知识点: * 最好支持按enter键添加学生 */}
          {this.state.addPerson && (
            <input
              className="person-button"
              id="add-person"
              type="text"
              onBlur={(e) => this.addPerson(e.target.value)}
            />
          )}
          {/* TODO GTB-知识点: * 绑定在html上的方法每次render 都会重新生成新的，为了性能更好，建议养成习惯吧该函数写成类成员， 就像addPerson一样 */}
          {!this.state.addPerson && (
            <button
              type="button"
              onClick={() => this.setState({ addPerson: true })}
              className="person-button"
            >
              +添加成员
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default PersonList;
