import { makeAutoObservable } from "mobx";

export class store {

  constructor() {
    makeAutoObservable(this);
  }


}

export const Store = new store();
