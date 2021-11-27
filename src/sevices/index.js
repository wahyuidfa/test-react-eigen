import axios from "axios";

export const getNewsList = () => {
    return axios.get(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=dd463be57049414bb4a9c3c4c2b1ad6b`
    )
}