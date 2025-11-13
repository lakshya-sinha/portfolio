
const Footer = () => {
  return (
    <footer>
      <div className="quote-box   p-9 flex text-center justify-center">
        <div className="quote-box-container p-8 ring-1 ring-gray-400 rounded-xl relative w-full sm:w-[55%]">
        <h2 className="mb-5 italic text-left text-gray-500 font-thin">“You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.”</h2>
        <p className="absolute right-10 italic ">— Bhagavad Gita</p>
      </div>
      </div>
        <footer className="flex flex-col items-center justify-center p-12  text-gray-400 text-sm">
          <p>Design & Developed by lakshya</p>
          <p>© 2025. All rights reserved.</p>
        </footer>
    </footer>
  )
}

export default Footer