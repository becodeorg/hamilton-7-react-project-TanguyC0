const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    search: [],
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            };
        case "FETCH_SEARCHED":
            return {...state, search: action.payload.search};
        case "CLEAR_SEARCHED":
            return {...state, search: []};
        default:
            return {...state};
    }
};

export default gameReducer;
