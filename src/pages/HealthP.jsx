import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading"
import { API_KEY, SOURSE_CATEGORY } from "../constants";
import PostP from "./PostP"


const HealthP = () => {
  const [item, setItem] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        let { data: searchData } = await axios.get(
          `${SOURSE_CATEGORY}/sources?category=health&${API_KEY}`
        );

        setItem(searchData.sources);
      } catch (err) {
        toast.error(err.message);
      }finally{
        setLoading(false)
      }
    };

    getData();
  }, []);
  return (
    <div className="container">
    {loading?<Loading/>: item.map((category) => (
      <PostP key={category.id} {...category} />
    ))}
  </div>
  )
}

export default HealthP