import {combineReducers} from "redux";




const initialState = {
    mostRecentBook:{},
    allBooks : [],
    addNewBook:{},
    editBook : {},
}

const reducer = (state= initialState,action) => {
    switch (action.type){
        case "GET_MOST_RECENT_BOOK":
            return{ ...state, mostRecentBook: action.payload}
    }


}

export const RootReducer = combineReducers(reducer)