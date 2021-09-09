import {combineReducers} from "redux";




const initialState = {
    mostRecentBook:{},
    allBooks : [],
    addNewBook:{},
    editBook : {},
}

const Reducer = (state= initialState,action) => {
    switch (action.type){
        case "GET_All_BOOKS":
            return{ ...state, allBooks: action.payload}
        default:
            return state;
    }

};

export const RootReducer = combineReducers(Reducer)