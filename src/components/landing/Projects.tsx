import githubProfileReviewer from '../../assets/github-profile-reviewer.png'
import playmaker from '../../assets/playmaker.png'
import Projectcard from '../cards/Projectcard'


const Projects = () => {

    const projects = [
        {
            image: githubProfileReviewer,
            title: "GitReviewer",
            link: "https://github-reviewer-pi.vercel.app/",
            repo: "https://github.com/lakshya-sinha/github-reviewer",
            slug: "A powerful GitHub Profile Reviewer with integrated notes, flashcards, quizzes, AI chatbot, and interactive learning features.",
            tech:  ["ri-reactjs-line ", "ri-tailwind-css-fill"]
        },
        {
            image: playmaker,
            title: "PlayMaker",
            link: "https://playmakerfootballacademy.co.in/",
            repo: "https://github.com/lakshya-sinha/not-found",
            slug: "A modern, high-performance football academy website built with GSAP animations and a clean, lightweight backend. with SEO ranking",
            tech: ["ri-html5-fill","ri-css3-fill","ri-javascript-fill", "before:content-['scss'] before:font-bold"]
        }
    ]


  return (
    <div className="project-main">
            <div className="layer-header mt-10 mb-4">
                <p className="text-gray-400">Featured</p>
                <h1 className="font-bold text-2xl">Projects</h1>
            </div>
            <div className="project-container grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {projects.map((e)=>{
                        return <Projectcard {...e}></Projectcard>
                    })}        
            </div>
        <div className="show-btn flex items-center justify-center mt-4 ">
          <a className="text-sm ring-1 ring-gray-300 inset-shadow-gray-300 inset-shadow-sm hover:inset-shadow-2xs transition-all p-1 pl-2 pr-2 rounded text-m cursor-pointer " href="/" target="_self">Show all projects</a>
        </div>

    </div>

  )
}

export default Projects