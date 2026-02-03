import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from "react-icons/md";

const Card = ({ title, description, gitHublink, deploymentlink }) => {
  return (
    <div className="flex flex-col w-[30vw] h-[50vh] border-4 border-gray-900 rounded-4xl hover:bg-[#1e1e1e] hover:scale-105 transition-transform duration-500">
      <nav className="flex flex-row p-5">
        <section className="w-[50%]">
          <h1 className='text-3xl'>{title}</h1>
        </section>
        <a className="flex flex-row gap-3 text-2xl ml-auto" href={gitHublink} target='_blank'>
          <p className="hover:text-[#8250DF] transition duration-300"> 
            <FaGithub/>
          </p>
        </a>
        <a className="flex flex-row gap-3 text-2xl ml-5" href={deploymentlink} target='_blank'>
          <p>
            <MdOpenInNew />
          </p>
        </a>
      </nav>
      <div className="mt-auto h-[40%] rounded-b-3xl bg-gray-900 bg-opacity-50 z-10 p-3">
        <h1 className="text-l">{description}</h1>
      </div>
    </div>
  )
}

export default Card;
