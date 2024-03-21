import { useLoaderData } from "react-router-dom";
import Datas from "./Datas";




const Data = () => {

    const data = useLoaderData();

    console.log(data)

    return (
        <div className=" text-center font-bold mt-5">

            <h1> this is Data:  {data.length} </h1>
            
            <div className=" grid grid-cols-3 gap-3">

              {


              data.map( data => <Datas key={data.id} data={data}  > </Datas> )

              }

            </div>

            
        </div>
    );
};

export default Data;