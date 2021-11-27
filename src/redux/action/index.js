import { getNewsList } from "../../sevices";

export const getNewsListAsync = () => {
    return (dispatch, getState) => {
        dispatch({ type: "getnewslist/get-start" });
        getNewsList()
            .then((response) => {
                dispatch(getNewsListSuccess(response.data));
                console.log(response.data, "test news list");
            })
            .catch((error) => {
                dispatch(getNewsListFailed(error));
            });
    };
};

export const getNewsListSuccess = (getNewsList) => ({
    type: "getnewslist/get-success",
    payload: {
        getNewsList,
    },
});

export const getNewsListFailed = (error) => ({
    type: "getnewslist/get-failed",
    payload: {
        error,
    },
});
