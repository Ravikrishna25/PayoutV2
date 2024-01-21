
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Payment from "./components/Payments"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<DropDown />} /> */}
                <Route path="/payment" element={<Payment />} />
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App

