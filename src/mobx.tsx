import { observable, action } from 'mobx';

export class AppState {
    @observable todoArray: any = [];
    @observable doneArray: any = [];

    @action.bound addSubmitItem(item: any) {
        this.todoArray.push(item);
    }

    @action.bound changeToDone(item: any) {
        this.todoArray.remove(item);
        this.doneArray.push(item);
    }

    @action.bound removeDone(item: any) {
        this.doneArray.remove(item);
    }
}

export default new AppState();