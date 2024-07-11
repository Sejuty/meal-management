import PropTypes from "prop-types";

const Card = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {title && (
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      )}
      {content && (
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{content}</p>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
