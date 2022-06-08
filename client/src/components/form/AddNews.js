import React, {useState} from "react"
import {useMutation, useQueryClient} from "react-query"
import {useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import {addNews} from "../../api/api"
const AddNews = () => {
  const init_data = {
    image:"",
    title:"",
    content:"",
    post_date:""
  }
  const [data, setData] = useState(init_data)
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const news = useMutation(addNews,{
    onSuccess:() => {
     queryClient.invalidateQueries("posts")
    }
  })
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleAddNews = () => {
    if(data.image === ""){
      toast.error("Please enter your image link", {position:"top-center"})
      return false
    }
    if(data.title === ""){
      toast.error("Please enter your title", {position:"top-center"})
      return false
    }
    if(data.content === ""){
      toast.error("Please enter your content", {position:"top-center"})
      return false
    }
    if(data.post_date === ""){
      toast.error("Please choose your post date", {position:"top-center"})
      return false
    }else{
      news.mutate(data)
      toast.success("Post added successfully", {position:"top-center"})
      navigate("/")
      return true
    }
  }
  return (
   <>
    <ToastContainer/>
    <div className="container">
      <h1 className="text-center text-primary">Add News</h1>
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
         <label>Post date</label>
         <input 
           type="date" 
           className="form-control"
           name="post_date"
           value={data.post_date}
           onChange={handleOnChange}
          />
       </div>
       <div className="form-group mb-4">
         <button type="button" className="btn btn-success" onClick={handleAddNews}>Submit</button>
       </div>
     </form>
   </div>
  </>
 )
}
export default AddNews