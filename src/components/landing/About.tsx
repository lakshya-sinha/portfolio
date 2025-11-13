import image from '../../assets/pfp-blue.png'
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div className="about-main">
        <div className="layer-header mt-10 mb-4">
                <p className="text-gray-400">About</p>
                <h1 className="font-bold text-2xl">Me</h1>
            </div>
        <div className="cover-about gap-5 flex sm:flex-row flex-col item-scenter justify-center">
            <div className="ca-first w-full sm:w-[35%]">
                <img src={image} alt="" className=' rounded-xl ring-1 ring-gray-400'/>
            </div>
            <div className="ca-second w-full sm:w-[75%]  flex flex-col justify-around">
                <div className="cas-first">
                    <h1 className='text-3xl font-bold'>Lakshya Sinha</h1>
                </div>
                <div className="cas-second text-gray-500">
                    <p>I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.</p>
                </div>
                <div className="cas-third ">
                    <p className="text-gray-400 font-bold">Skills</p>
                    <div className="skills-icons-container text-3xl">
                        <i className="ri-tailwind-css-line"></i>
                        <i className="ri-reactjs-line"></i>
                        <i className="ri-nextjs-fill"></i>
                        <i className="ri-javascript-fill"></i>
                    </div>
                </div>
            </div>
        </div> 
        
    <div className="github-contri-container">
        <div className="layer-header mt-10 mb-4">
                <p className="text-gray-400">Featured</p>
                <h1 className="font-bold text-2xl">GitHub Activity</h1>
        </div>
    <div className="mt-4 overflow-y-hidden w-full  border-dotted border-gray-400 border-2 p-3 rounded-xl">
      <GitHubCalendar username="lakshya-sinha" colorScheme="light" />
    </div>
    </div>


    </div>

   
  )
}

export default About