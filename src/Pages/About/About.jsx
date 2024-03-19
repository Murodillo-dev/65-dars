import { NavLink, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1 className='text-[40px] text-green-800'>
                This is ABOUT page Compenent
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero repellat culpa dicta ut consequuntur repellendus iusto perferendis sit et sequi, deleniti eos rerum nisi? Unde veniam quasi debitis tempore, ab aliquam quos maiores totam earum sint aperiam eos est, vero natus incidunt, doloremque possimus!
            </p>
            <NavLink to="first"  className="w-[200px] text-center text-white leading-10 m-7 block h-10 bg-cyan-800">First_nested Page</NavLink>
            <NavLink to="second"  className="w-[200px] text-center text-white leading-10 m-7 block h-10 bg-cyan-800"> Second_nested Page</NavLink>

            <Outlet/>
        </div>
    )
}

export default About