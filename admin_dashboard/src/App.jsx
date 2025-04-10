import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { createContext } from "react";

const MyContext = createContext();

function App() {

  const values = {

  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main flex">
            <div className="sidebarWrapper w-[20%]">
              <Sidebar />
            </div>

            <div className="content_Right w-[80%]">
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
