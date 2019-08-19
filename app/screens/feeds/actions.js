import { feeds } from '../../data/data'

export function fetchFeeds(data) {
    console.log("fuction call");
    return function (dispatch, getState) {
        if (data) {
            let newFeeds = []
            newFeeds[0] = data
            let feed = getState().feeds.todos
            feed.map((item) => {
                newFeeds.push(item)
            })
            dispatch(getToDosSuccess(newFeeds))
        }
        else {
            dispatch(getToDosSuccess(feeds))
        }
    }
}

export function updatePost(item, like){
    return function (dispatch, getState) {
        let feed = getState().feeds.todos
    }
}

function getToDosSuccess(data) {
    console.log("data", data);

    return {
        type: "FETCH_TODOS_SUCCESS",
        payload: data
    }
}
