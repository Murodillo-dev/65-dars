import React from 'react'

import { Outlet,NavLink } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <header className='w-full h-24 bg-teal-600 '>
                <ul className='flex justify-evenly items-center h-full text-[35px] text-black-700 font-semibold'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer className='w-full h-auto bg-teal-600 mt-24' >
                <h1 className='text-[35px] text-red-700 font-semibold'>
                    this is Footer component
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum aperiam consequatur temporibus, nulla blanditiis accusantium corporis asperiores laborum minus officia molestiae. Laboriosam recusandae sit earum fugit vel ipsum atque animi excepturi sunt quia quos vero facilis soluta nisi optio repellat quas officia architecto dolore iusto exercitationem asperiores, nam ex!
                </p>
            </footer>
        </div>
    )
}

export default MainLayout