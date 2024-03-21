import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div >
              <h1 className=" text-center text-2xl text-blue-500"> our web site </h1>

              <nav className=" flex justify-center gap-5 items-center text-center text-xl text-violet-600 font-bold"  >

              <Link to="/" >home</Link>
              <Link to="/about" >About</Link>
              <Link to="/contact" >Contact</Link>
              <Link to="/service" >Service</Link>
              <Link to="/Data" >Data</Link>



              </nav>
        </div>
    );
};

export default Nav;