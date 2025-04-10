import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main">
            <div className="sidebarWrapper w-[20%]">
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
