export const intialState={
    basket: [{
        id: "1001",
        title: "Ford Mustang GT sports, 600 horsepower,  cylinder deactivation and active exhaust system",
        price: 1000,
        rating: 5,
        image:"/e1.jpeg"
    }],
    user: null,
};

function reducer(state, action){
    switch(action.type){
        case "ADD_TO_BASKET":
            // LOGIC FOR THIS CASE
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            // LOGIC FOR THIS CASE
            return {...state};
        default:
            return state;
    }
}
export default reducer;