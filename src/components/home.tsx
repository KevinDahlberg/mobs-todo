import * as React from 'react';

import { inject, observer } from 'mobx-react';

import List from './list';
import Input from './input';

@inject('AppState')
@observer
export default class Home extends React.Component<any, any> {

    handleSubmitClick = (item: any): void => {
        console.log('submit clicked');
        const { AppState } = this.props;
        AppState.addSubmitItem(item);
      }
    
      handleDoneClick = (item: any): void => {
        const { AppState } = this.props;
        AppState.changeToDone(item);
      }
    
      handleDeleteClick = (item: any): void => {
        const { AppState } = this.props;
        AppState.removeDone(item);
      }

      render() {
        const { todoArray, doneArray } = this.props.AppState;
        console.log(todoArray, doneArray);
        return(
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