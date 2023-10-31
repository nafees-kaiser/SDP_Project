import { legacy_createStore as createStore } from "redux";


const reducefn = (state ={counter:10},action)=>{
    if (action.type === "INC"){
        return {counter: state.counter+1}
    }
    else if(action.type === "DEC"){
        return {counter:state.counter-1}
    }
    return state;
}

const store = createStore(reducefn);
export default store;