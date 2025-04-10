import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { createContext } from "react";
import Dashboard from "./pages/Dashboard";

const MyContext = createContext();

function App() {

  const values = {

  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
              <Sidebar />
            </div>

            <div className="content_Right w-[85%] px-3">
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App;
