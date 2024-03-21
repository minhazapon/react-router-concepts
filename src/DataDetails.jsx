import { useLoaderData } from "react-router-dom";




const DataDetails = () => {

    const DataDetails = useLoaderData();


    const { name, email} = DataDetails


    return (
        <div>

          <div className=" text-center font-bold mt-5 text-pink-600">
               <h1> name: { name} </h1>

               <h1> email: {email} </h1>



          </div>


            
        </div>
    );
};

export default DataDetails;