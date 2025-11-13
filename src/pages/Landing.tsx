import MainAbout from "../components/landing/MainAbout"
import Experience from "../components/landing/Experience"
import Projects from "../components/landing/Projects"
import About from '../components/landing/About'

const landing = () => {
  return (
    <>    
            
                <main className='  flex justify-center p-2'>
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

export default landing