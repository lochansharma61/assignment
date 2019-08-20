import { feeds } from '../../data/data'
import { postCreate, getFeeds, updatePostLike, updatePostDislike } from '../../api/feeds';

export function fetchFeeds(data) {
    return async function (dispatch, getState) {
        if (data) {
            try {
                let newFeeds = []
                newFeeds[0] = data
                let feed = getState().feeds.todos
                feed.map((item) => {
                    newFeeds.push(item)
                })
                //## here we call api(below is the function to call api) to add the new post to api and the response will set to feeds reducer
                // let response = await postCreate(data)
                dispatch(getToDosSuccess(newFeeds))
            }
            catch (error) {
                console.log('err ', error)
            }
        }
        else {
            try {
                //## here we call api(below is the function to call api) to get all the feeds
                // let response = await getFeeds(data)
                // dispatch(getToDosSuccess(response))
                dispatch(getToDosSuccess(feeds))
            }
            catch (error) {
                console.log('err ', error)
            }
        }
    }
}

export function updateLike(item) {
    return function (dispatch, getState) {
        try {
            //##this api(below is the function to call api) will update the like count in database before uncomment please provide api path
            // let res = dispatch(updatePostLike(item.id, userId, token))
        }
        catch (error) {
            console.log('err ', error)
        }
    }
}

export function updateDislike(item) {
    return function (dispatch, getState) {
        try {
            //##this api(below is the function to call api) will update the like count in database before uncomment please provide api path
            // let res = dispatch(updatePostDislike(item.id, userId, token))
        }
        catch (error) {
            console.log('err ', error)
        }
    }
}

function getToDosSuccess(data) {
    return {
        type: "FETCH_TODOS_SUCCESS",
        payload: data
    }
}
