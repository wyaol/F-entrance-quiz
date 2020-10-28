import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

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
    // TODO GTB-知识点: * 建议把数据请求提取到单独的service（util）
    // TODO GTB-知识点: * 建议把URL定义为常量
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
        <div className="group-title">
          <h2>分组列表</h2>
          {/* TODO GTB-知识点: * onClick 里面可以直接绑定this.group */}
          <button align="right" type="submit" onClick={() => this.group()}>
            分组学员
          </button>
        </div>
        <div className="group">
          {/* TODO GTB-知识点: * 单独的group 可以提取出一个组件 */}
          {this.state.groups.map((group) => (
            <div className="group-item" key={group.groupName}>
              <div className="group-name">{group.groupName}</div>
              <div>
                {/* TODO GTB-知识点: * 建议将单个学员这一块抽取成组件，可以在其他组件复用 */}
                {group.students.map((student) => (
                  <div className="person-button" key={student.id}>
                    {student.id}: {student.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupList;
