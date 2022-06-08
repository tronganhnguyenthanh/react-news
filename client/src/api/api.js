import axios from "axios"
// Add news
export const addNews = (data) => {
 return axios.post("https://api-post-system.herokuapp.com/api/post/add", data)
}

// Get list news
export const getListNews = () => {
 return axios.get("https://api-post-system.herokuapp.com/api/post/list")
}


// View news detail
export const getNewsDetail = (_id) => {
  return axios.get(`https://api-post-system.herokuapp.com/api/post/view/${_id}`)
}

// Delete news
export const deleteNews = (_id) => {
  return axios.delete(`https://api-post-system.herokuapp.com/api/post/delete/${_id}`)
}