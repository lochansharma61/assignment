
const baseApiUrl = 'http://url/'
const API_HOST = 'http://url'
apiVersion = 'api'

const apiUrls = {
    feedsList: `${baseApiUrl}${apiVersion}/Feeds/`,
    createPost: `${baseApiUrl}${apiVersion}/CreatePost?`,
    updatePost: `${baseApiUrl}${apiVersion}/Post`,
}


export {
    apiUrls,
    API_HOST,
}