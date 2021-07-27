import { makeAutoObservable } from "mobx";

class CountStore {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  setValue = <T extends keyof CountStore>(key: T, value: this[T]) => {
    this[key] = value;
  }
}

export default CountStore;