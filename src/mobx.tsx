import { observable } from 'mobx';

export class AppState {
    @observable todoArray = [];
    @observable doneArray = [];
}