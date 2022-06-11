import axios from "axios"
import React, {Fragment, useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import Footer from "../footer/Footer"
const ViewNewsDetail = () => {
  const {_id} = useParams()
  const [view_detail, setViewDetail] = useState({})
  const navigate = useNavigate()
  const [loading, setIsLoading] = useState(false)
  useEffect(() => {
    handleGetNewsDetail(_id)
  },[_id])
  // Handle get news detail   
  const handleGetNewsDetail = () => {
    axios.get(`https://api-post-system.herokuapp.com/api/post/view/${_id}`).then((res) => {
     setViewDetail(res.data)
     setIsLoading(true)
    }).catch(() => console.log("Failed to fetch data"))
  }
  // Loading   
  if(!loading){
   return(
     <div className="d-flex justify-content-center">
       <img src="/image/loading_icon.jpg" alt=""/>
     </div>
   )
  }
  const goBack = () => {
    navigate("/")
  }
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center text-primary">View news detail</h1>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card mt-1">
              <div className="media">
                <img src={view_detail.image} className="w-50 p-2 news" alt=""/>
                <div className="media-body">
                  <h5 className="mt-5">{view_detail.title}</h5>
                  <p>{view_detail.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={goBack}>
          <ion-icon name="arrow-back-outline"/>
        </button>
      </div>
      <Footer/>
    </Fragment>
  )
}
export default ViewNewsDetail
