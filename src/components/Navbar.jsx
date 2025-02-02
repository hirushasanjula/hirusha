import { FaGithub, FaLinkedin } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home' className="font-bold text-2xl text-stone-300">
                HS
            </a>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/hirusha-sanjula-8aba1b349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
             target="_blank"
             rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a href="https://github.com/hirushasanjula"
             target="_blank"
             rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar