import MainAbout from "../components/landing/MainAbout"
import Experience from "../components/landing/Experience"
import Projects from "../components/landing/Projects"
import About from '../components/landing/About'
import { useEffect, useState } from "react";


const Landing= () => {

   const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBlurred(false), 200); // 2s
    return () => clearTimeout(t);
  }, []);




  return (
    <>    
            
                <main className={`flex justify-center p-2  transition duration-700 ease-out ${blurred ? 'blur-sm' : 'blur-0'}`}>
                  <div className="main-container w-full lg:w-[50%]">

                    <MainAbout></MainAbout>
                    <Experience></Experience>
                    <Projects></Projects>
                    <About></About>

                  </div>
                </main>
    </>
  )
}

export default Landing