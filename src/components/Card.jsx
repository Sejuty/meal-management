import PropTypes from "prop-types";

const Card = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-gray-800 text-gray-200">
      <div className="px-10 py-4">
        <div className="font-normal text-xl ">{title}</div>
      </div>

      <div className="px-3 pb-4">
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
