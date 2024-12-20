import Slugpage from "./slugpage";


const page = ({params}:{params:{slug:string}}) => {
  return (
    <div>
    <Slugpage params={params}/>
    </div>
  );
};

export default page;
