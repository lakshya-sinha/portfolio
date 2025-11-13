import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Blog, Landing} from './pages/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLenis } from "./hooks/useLenis.ts";


function App() {
   useLenis();

  return (
    <>
      <BrowserRouter> 
        <Navbar></Navbar>
        <Routes>
          
          <Route path='/' element={<Landing/>}></Route>  
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes> 

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
