import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
const EditNews = () => {
  const init_data = {
    image:"",
    title:"",
    content:""
  }
  const [data, setData] = useState(init_data)
  const {_id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    handleGetNewsDetail(_id)
  },[_id])
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleGetNewsDetail = () => {
    axios.get(`https://api-post-system.herokuapp.com/api/post/view/${_id}`).then((res) => {
      setData(res.data)
    })
    .catch(() => console.log("Failed to fetch data"))
  }
  const handleUpdateNews = async () => {
    // Check empty image
    if (data.image === "") {
      toast.error("Please enter your image link", {position:"top-center"})
      return false
    }
    // Check empty title
    if (data.title === "") {
      toast.error("Please enter your title", {position:"top-center"})
      return false
    }
    // Check empty content
    if (data.content === "") {
      toast.error("Please enter your content", {position:"top-center"})
      return false
    } else {
      let update_news = {
        image:data.image,
        title:data.title,
        content:data.content
      }
      let update_url = await axios.put(`https://api-post-system.herokuapp.com/api/post/update/${_id}`, update_news)
      setData(update_url)
      navigate("/")
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <h1 className="text-center text-primary">Edit News</h1>
        <form>
          <div className="form-group mb-4">
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={data.image}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-4">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={data.title}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-4">
            <label>Content</label>
            <textarea
              rows={5}
              className="form-control"
              name="content"
              value={data.content}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateNews}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditNews;
