import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ENPOINT, SOURSE_CATEGORY } from "../constants";
// import PostP from "./PostP";

const EntertaimenP = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data:searchData } = await axios.get(`${ENPOINT}category=entertainment`);

      setItem(searchData.sources)
      } catch (err) {
        toast.error(err.message);
      }
    };

    getData();
  }, []);
  console.log(item);
  return (
    <div className="container">

      {item.map((category)=>(
        
        <>
        <div className="mt-3">
      <h1 className="text-primary pb-3">{category.category} </h1>
      <div className="line"></div>
      <div className="cards">
        <div className="card_title">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
        <img src="" alt="" />
      </div>
    </div>
        </>
      ))}
      {/* {item.map((i) => (
        <PostP key={i.id} {...i} />
      ))} */}
    
    </div>
  );
};

export default EntertaimenP;
