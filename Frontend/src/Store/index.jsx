import { legacy_createStore as createStore } from "redux";
import reducefn from '../Reducers/multiple.jsx'


const store = createStore(reducefn);
console.log('Initial state :',store.getState())
const unsuscribe = store.subscribe(()=>console.log('Updated state: ',store.getState()))
store.dispatch(increment())
unsuscribe()