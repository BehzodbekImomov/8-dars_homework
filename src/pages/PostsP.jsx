import PropTypes from "prop-types";

const PostsP = ({category,name,description,url}) => {
  return <div className="mt-3">
    <h1 className="text-primary pb-3">{category} > </h1>
    <div className="line"></div>
    <div className="cards">
      <div className="card_title">

      <h2>{name}</h2>
      <p>{description}</p>
      </div>
      <img src={url} alt="" />
    </div>
  </div>;
};

PostsP.propTypes={
  category:PropTypes.string,
  name:PropTypes.string,
  description:PropTypes.string,
  url:PropTypes.string,
}
export default PostsP;
