const initialState = {
    newsList: [],
    loading: false,
    error: "",
};

function getNewsListReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getnewslist/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getnewslist/get-success":
            return {
                ...state,
                newsList: payload.getNewsList.articles,
                loading: false,
                error: "",
            };
        case "getnewslist/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error.message,
            };
        default:
            return state;
    }
}
export default getNewsListReducer;
