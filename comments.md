### 完成度：

- 功能基本都实现了，除了添加学员的时候默认 focus 和触发“Enter”键创建学员

**Details:**

### 测试：

**Details:**

### 知识点：

- 建议将单个学员这一块抽取成组件，可以在 group 里面复用
- 添加学员这一块也可以抽取成组件
- 这里用三元表达式可能简单一点
- 输入框最好支持自动 focus
- 最好支持按 enter 键添加学生
- 绑定在 html 上的方法每次 render 都会重新生成新的，为了性能更好，建议养成习惯吧该函数写成类成员， 就像 addPerson 一样
- 建议把数据请求提取到单独的 service（util）
- 建议把 URL 定义为常量
- onClick 里面可以直接绑定 this.group
- 单独的 group 可以提取出一个组件
- 建议将单个学员这一块抽取成组件，可以在其他组件复用

**Details:**

- \+ 划分两个组件

### 工程实践：

- 这里的变量命名最好用一个表示状态的词，比如 isEditing
- 前后端命名最好统一，不用一边 person，一边 student
- 建议把数据请求提取到单独的 service（util）

**Details:**

- \+ 小步提交，commit 清晰能够看出 tasking 过程
- \+ class 命名合理

### 综合：

- 数据结构清晰，组件划分可以再细一些，API 请求最好提取到单独的 service

**Details:**
