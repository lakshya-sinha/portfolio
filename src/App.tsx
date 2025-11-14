import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Blog, Landing} from './pages/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLenis } from "./hooks/useLenis.ts";
import Projects from './pages/Projects.tsx'
import Work from './pages/Work.tsx'
import WinterArc from './components/blogs/WinterArc.tsx'


function App() {
   useLenis();

  return (
    <>
      <BrowserRouter> 
        <Navbar></Navbar>
        <Routes>
          
                <Route path='/' element={<Landing/>}></Route>  
                <Route path='/blog' element={<Blog/>}>
                  <Route path='winterarc' element={<WinterArc/>}></Route> 
                </Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/work' element={<Work/>}></Route>

        </Routes> 

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
