import appdata from '../constant'
const cartreducer = (state={cart:appdata.cartdata}, action) => {
    switch (action.type){
        case "ADD":
        // state = state + action.payload;
        state = {
            ...state,
            cart : state.cart +1
        };
        break;
        case "SUB":
        // state = state - action.payload;
        state = {
            ...state,
            cart : state.cart - 1
        };
        break;
    }
    return state;
};
export default cartreducer