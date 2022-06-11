import React from "react"
import {
  useIsFetching,
  useMutation,
  useQuery,
  useQueryClient
} from "react-query"
import {deleteNews, getListNews} from "../../api/api"
import moment from "moment"
import {ToastContainer, toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import Footer from "../footer/Footer"
const ListNews = () => {
  const query = useQuery("posts", getListNews)
  const queryClient = useQueryClient()
  const isFetching = useIsFetching()
  const navigate = useNavigate()
  const delete_news = useMutation(deleteNews, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    }
  })
  const handleDeleteNews = (_id) => {
    let answer = "Are you sure you want to delete it ?"
    if (window.confirm(answer) === true) {
       delete_news.mutate(_id)
       toast.success("News deleted successfully", {position:"top-center"})
       return true
    } else {
       return false
    }
  }
  const handleEditNews = (_id) => {
    navigate(`/news/edit/${_id}`)
  }
  const handleViewNews = (_id) => {
    navigate(`/news/view/${_id}`)
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <h1 className="text-center text-primary">My news</h1>
        <div className="row d-flex justify-content-center">
          {isFetching ? (
           <img src="/image/loading_icon.jpg" alt=""/>
          ):(
          query?.data?.data.map((i, index) => {
              return (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2" key={index}>
                  <div className="card p-2 mt-2">
                    <b className="d-flex justify-content-end p-2 text-primary">
                      {moment(i.post_date).format("DD/MM/YYYY")}
                    </b>
                    <img src={i.image} alt="" className="w-100" onClick={() => handleViewNews(i._id)}/>
                    <h1 className="text-center">{i.title}</h1>
                    <p className="text-center">{i.content}</p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-info w-25 p-2 ml-2" onClick={() => handleEditNews(i._id)}>
                         Edit
                      </button>
                      <button className="btn btn-danger w-25 p-2 ml-2" onClick={() => handleDeleteNews(i._id)}>
                         Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
           )}
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default ListNews
