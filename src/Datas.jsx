import { Link } from "react-router-dom";


const Datas = ({data}) => {

    const {id, name, email} = data

    return (
        <div className=" border-[1px] border-blue-400 p-2 rounded-2xl">


            <h1> {name}  </h1>

            <h1> {email} </h1>

            <h1> {id} </h1>

            <Link className=" mt-3 text-blue-700" to={`/data/${id}`} >dataDetails</Link>




            
        </div>
    );
};

export default Datas;