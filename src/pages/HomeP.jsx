import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
// import { API_KEY, SOURSE_CATEGORY } from "../constants";
import PostP from "./PostP";

const HomeP = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        let { data} = await axios.get(
          // `${SOURSE_CATEGORY}/sources?q=${search}&${API_KEY}`
        `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=61418203e18d4576bcdd947075df6834`
        );

        setItem(data.articles);
      } catch (err) {
        toast.error(err.message);
      }finally{
        setLoading(false)
      }
    };

    getData();
  }, [search]);
console.log(search);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <input
          value={search}
          onChange={handleSearch}
          className="form-control mt-5 mb-5 w-50 m-auto"
          type="text"
          placeholder="searching..."
        />
      </form>

      {loading ? (
        <Loading />
      ) : (
        item.map((category) => <PostP key={category.id} {...category} />)
      )}
    </div>
  );
};

export default HomeP;
