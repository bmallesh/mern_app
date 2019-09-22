import {createStore,combineReducers,applyMiddleware} from 'redux';
// import logger from "redux-logger";
import cartreducer from "./reducers/cartReducer";
import userreducer from "./reducers/userreducer";
const myloged= (store) => (next) => (action) =>{
    console.log("logede : "+action)
    next(action)
}
export default createStore(
    combineReducers({cartItem: cartreducer,user: userreducer}),
    {},
    applyMiddleware(myloged)
    );


