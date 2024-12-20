import React from "react";
import Categorypage from "./categorypage";


const page = ({params}:{params:{catrgories:string}}) => {
  
  return (
    <div className="mt-12">
      <Categorypage params={params}/>
    </div>
  );
};

export default page;
