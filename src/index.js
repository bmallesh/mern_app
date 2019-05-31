import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address

import {Provider} from "react-redux";
import {createStore,applyMiddleware,combineReducers} from "redux"

//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';



const cartreducer=(state={result:0},action)=>{
    switch(action.type){
        case "ADD":
        state={
            ...state,
            result:state.result + 1
        };
        break;
    }
    return state;
}


const myloged=(store)=>(next)=>(action)=>{
    console.log("loged : "+action);
    next(action)
}
const store = createStore(combineReducers({cartreducer}),{},applyMiddleware(myloged))
store.subscribe(()=>{
    console.log("Store UPdated!",store.getState())
});
// store.dispatch({
//     type:"ADD"
// });
ReactDOM.render(
		<Provider store={store}>
		<BrowserRouter>
			<App />
			</BrowserRouter>
		</Provider>,
	document.getElementById('root')
)