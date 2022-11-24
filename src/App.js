import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";


export default function App () {
  let pageSize = 6
    return (
      <div>
        <HashRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News pageSize={pageSize} category="general" key="general" country="in"/>}></Route>
            <Route exact path="/business"  element={<News pageSize={pageSize} key="business" category="business" country="in"/>}></Route>
            <Route exact path="/entertainment" element={<News pageSize={pageSize} key="entertainment" category="entertainment" country="in"/>}></Route>
            <Route exact path="/health" element={<News pageSize={pageSize} category="health" key="health" country="in"/>}></Route>
            <Route exact path="/science" element={<News pageSize={pageSize} key="science" category="science" country="in"/>}></Route>
            <Route exact path="/sports" element={<News pageSize={pageSize} key="sports" category="sports" country="in"/>}></Route>
            <Route exact path="/technology" element={<News pageSize={pageSize} key="technology" category="technology" country="in"/>}>
        </Route >
        </Routes>
        </div>
        </HashRouter>
      </div>
    )
}
