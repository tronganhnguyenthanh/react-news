import React from "react"
import {Route, Routes} from "react-router-dom"
import AddNews from "../components/form/AddNews"
import ListNews from "../components/list/ListNews"
import Menu from "../components/menu/Menu"
import "react-toastify/dist/ReactToastify.css"
import EditNews from "../components/form/EditNews"
import ViewNewsDetail from "../components/form/ViewNewsDetail"
const App = () => {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<ListNews/>}/>
        <Route path="/news/add" element={<AddNews/>}/>
        <Route path="/news/edit/:_id" element={<EditNews/>}/>
        <Route path="/news/view/:_id" element={<ViewNewsDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
