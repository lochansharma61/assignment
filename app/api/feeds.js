import { apiUrls } from './constants/constants'
import { doPost, doGet, doDelete, doPatch } from './fetchApiActions';

export async function postCreate(payload) {
  return await doPost(apiUrls.createPost, payload)
}

export async function getFeeds(token) {
  return await doGet(`${apiUrls.feedsList}` + '?access_token='+token)
}

export async function updatePostLike(postId, token) {
  return await doGet(`${apiUrls.updatePost}/like?` + postId + '&access_token='+token)
}

export async function updatePostDislike(postId, token) {
  return await doGet(`${apiUrls.updatePost}/dislike?` + postId + '&access_token='+token)
}


