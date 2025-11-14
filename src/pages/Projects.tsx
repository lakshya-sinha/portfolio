import React from 'react'

const Projects = () => {
  return (
    <main className="main-container flex justify-center "> 
      <div className="main-container w-full lg:w-[50%] mt-5">
        <div className="title text-center  ">
          <h1 className="text-5xl font-bold m-6">Projects</h1>
          <p className="text-gray-500 m-7 text-lg ">My projects and work across different technologies and domains.</p>
          <hr className='text-gray-400' />
        </div>
        <div className="blogs mt-8">
          <h1 className="text-2xl font-bold">All Projects </h1>
          <div className="blog-box  h-screen flex items-center justify-center">
            <h2 className="text-8xl text-gray-400 ">Adding soon....</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects