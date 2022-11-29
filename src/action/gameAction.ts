import axios from "axios";

const req = {
    popular: "https://api.rawg.io/api/games?key=2fc57f307d284c1994d1502d8dcdafeb&dates=2019-09-01,2019-09-30&platforms=18,1,7",
    newGames: "",
    upcoming: "",
};

export const loadGames = () => async (dispatch) => {
    const populardata = await axios.get(req.popular);
    const newdata = await axios.get(req.newGames);
    const upcomingdata = await axios.get(req.upcoming);
    dispatch({
        type: "FETCH_GAMES",
        payload: {popular: populardata.data.results, newGames: newdata.data.results, upcoming: newdata.data.results},
    });
};
