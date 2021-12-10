const { createStore } = require("redux")

const initialState = {
    movie: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_MOVIES') {
        return {
            ...state,
            movie: action.payload
        }
    }
    return state;
}

const store = createStore(reducer)

export default store