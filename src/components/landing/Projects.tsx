import githubProfileReviewer from '../../assets/github-profile-reviewer.png'


const Projects = () => {
  return (
    <div className="project-main">
            <div className="layer-header mt-10 mb-4">
                <p className="text-gray-400">Featured</p>
                <h1 className="font-bold text-2xl">Projects</h1>
            </div>
            
            <div className="project-container grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="project-box rounded-xl overflow-hidden shadow ring-1 ring-gray-300">
                        
                        <div className="v-first  object-cover">
                            <img src={githubProfileReviewer} alt="" />
                        </div>

                        <div className="v-second p-5 flex flex-col gap-3">
                            <div className="vs-row1 flex items-center justify-between">
                                <h1 className="text-xl  font-bold">
                                    GitReviewer
                                </h1>
                                <div className="links flex gap-1">
                                    <a href="https://github-reviewer-pi.vercel.app/" target="_blank"><svg className="size-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path></svg></a>
                                    <a href="https://github.com/lakshya-sinha/github-reviewer" target="_blank"><svg className="size-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg></a>
                                </div>
                            </div>
                            <div className="vs-row2 text-gray-400">
                                <h2>A powerful GitHub Profile Reviewer with integrated notes, flashcards, quizzes, AI chatbot, and interactive learning features. </h2>
                            </div>
                            <div className="vs-row3">
                                <p>Technologies</p>
                                <div className="tech-stack-container flex text-2xl ">
                                  <i className="ri-reactjs-line "></i>
                                  <i className="ri-tailwind-css-fill"></i>
                                </div>
                            </div>
                            <div className="vs-row4 flex items-center justify-between">
                                <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-500/10"><div className="size-2 rounded-full bg-green-500 animate-pulse"></div>All Systems Operational</div>
                                <a href="/" className="text-gray-400">View Details </a>
                            </div>
                        </div>

                    </div>
                    
        
            </div>

<div className="show-btn flex items-center justify-center mt-4 ">
          <a className="text-sm ring-1 ring-gray-300 inset-shadow-gray-300 inset-shadow-sm hover:inset-shadow-2xs transition-all p-1 pl-2 pr-2 rounded text-m cursor-pointer " href="/" target="_self">Show all projects</a>
        </div>


    </div>

  )
}

export default Projects