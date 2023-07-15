import PropTypes from "prop-types";

const PostP = ({ name, description, category }) => {
  return (
    <div className="mt-3">
      <h1 className="text-primary pb-3">{category} </h1>
      <div className="line"></div>
      <div className="cards">
        <div className="card_title">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

PostP.propTypes={
  category:PropTypes.string,
  name:PropTypes.string,
  description:PropTypes.string,
}
export default PostP;
