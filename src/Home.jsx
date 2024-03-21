import { Outlet } from "react-router-dom";
import Nav from "./Nav";



const Home = () => {
    return (
        <div>
             
           
          <Nav></Nav>
            <h1 className=" text-center font-bold text-2xl mt-2">This is home of javaScript</h1>
             <Outlet></Outlet>





        </div>
    );
};

export default Home;