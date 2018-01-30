import * as React from 'react';

import { observer } from 'mobx-react';

import List from './list';
import Input from './input';

interface State {
  todoArray: any;
  doneArray: any;
  showAll: boolean;
  showDone: boolean;
  showTodo: boolean;
}

@observer
export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoArray: [],
      doneArray: [],
      showAll: true,
      showDone: true,
      showTodo: true,
    };
  }

  handleSubmitClick = (item: any): void => {
    console.log(item);
    const doArray = this.state.todoArray;
    doArray.push(item);
    console.log(doArray);
    this.setState({ todoArray: doArray });
  }

  handleDoneClick = (item: any): void => {
    const done = this.state.doneArray;
    const todo = this.state.todoArray;
    done.push(item);
    const newTodo = todo.filter((e: any) => e !== item);
    this.setState({ doneArray: done, todoArray: newTodo });
  }

  handleDeleteClick = (item: any): void => {
    const done = this.state.doneArray;
    const newDone = done.filter((e: any) => e !== item);
    this.setState({ doneArray: newDone });
  }

  render() {
    const { todoArray, doneArray } = this.state;
    return (
      <div className="App">
        <div className="input-wrapper">
          <Input handleClick={this.handleSubmitClick}/>
        </div>
        <h2>To Do</h2>
        <List items={todoArray} handleClick={this.handleDoneClick} />
        <h2>Done</h2>
        <List items={doneArray} handleClick={this.handleDeleteClick} />
      </div>
    );
  }
}
