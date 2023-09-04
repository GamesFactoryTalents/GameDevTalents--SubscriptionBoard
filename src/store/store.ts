import { makeAutoObservable } from "mobx";
import subscribers from "../generated/subscribers.json";

class AppState {
  subscribers = [...subscribers];

  constructor() {
    makeAutoObservable(this);
  }

  candidatesDispatch = (value: any) => {
    console.log('newCandidates', JSON.parse(JSON.stringify([...value])));
    this.subscribers = JSON.parse(JSON.stringify([...value]));
  }

  setDefaultCandidates = () => {
    this.subscribers = [...subscribers];
  }
}

const appState = new AppState();
export default appState;
