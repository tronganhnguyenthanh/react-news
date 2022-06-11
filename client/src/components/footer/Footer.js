import React from "react"
const Footer = () => {
  return (
    <div className="footer mt-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h2 className="text-white">What is Lorem Ipsum?</h2>
            <p className="text-white mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h2 className="text-white">Why do we use it?</h2>
            <p className="text-white mt-2">
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h2 className="text-white text-nowrap">Where does it come from?</h2>
            <p className="text-white mt-2">
               Contrary to popular belief, Lorem Ipsum is not simply random text. 
               It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
               a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
               from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h2 className="text-white text-nowrap">Where can I get some?</h2>
            <p className="text-white mt-2">
               Contrary to popular belief, Lorem Ipsum is not simply random text. 
               It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
               a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
               from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
      </div>
      <span className="text-white d-flex justify-content-end mx-2">Copyright by &copy; by Trong Anh. All rights reserved</span>
    </div>
  )
}

export default Footer