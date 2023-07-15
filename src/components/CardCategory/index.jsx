import { Link } from "react-router-dom";

import './Card.scss'

const CardCategory = () => {
  return (
    <div className="container m-auto">
      <ul className="categoryCard">
        <li>
          <Link to="/busines">business</Link>
        </li>
        <li>
          <Link to="/enterteiment">entertainment</Link>
        </li>
        <li>
          <Link to="/health">health</Link>
        </li>
        <li>
          <Link to="/science">science</Link>
        </li>
        <li>
          <Link to="/sport">sports</Link>
        </li>
        <li>
          <Link to="/technology">technology</Link>
        </li>
      </ul>
    </div>
  );
};

export default CardCategory;
