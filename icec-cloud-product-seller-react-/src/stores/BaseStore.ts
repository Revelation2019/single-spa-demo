import { makeAutoObservable } from "mobx";

class BaseStore {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;


  setValue = <T extends keyof BaseStore>(key: T, value: this[T]) => {
    this[key] = value;
  }

}

export default BaseStore;