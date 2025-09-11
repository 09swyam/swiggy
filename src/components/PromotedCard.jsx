const PromotedCard = (CardComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded">
          PROMOTED
        </span>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default PromotedCard;
