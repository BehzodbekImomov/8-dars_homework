import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { SOURSE_CATEGORY } from "../../constants";
import PostsP from "../../pages/PostsP";
import CardCategory from "../CardCategory";
// import Searching from "../Searching";

const Header = () => {
  const [search, setSearch] = useState("");
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get(`${SOURSE_CATEGORY}`);

        setCategorys(data.sources);
      } catch (err) {
        toast.error(err.message);
      }
    };

    getData();
  }, [search]);

  const handleSearch =(e)=>{
    setSearch(e.target.value)
      }
    console.log(search);
  return <Container>
   <form  >
        <input
        value={search}
        onChange={handleSearch}
          className="form-control mt-5 mb-5 w-50 m-auto"
          type="text"
          placeholder="searching..."
        />
      </form>

      <CardCategory />
      {categorys.map((category) => (
        <PostsP key={category.id} {...category} />
      ))}

    
  </Container>
};

export default Header;
