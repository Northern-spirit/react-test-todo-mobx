import React from "react";
import "./../styles/Card.sass";

const Card = (props) => {
  const {
    problem,
    id,
    changeCheck,
    completed,
    removeCard,
    filterLet,
    filtering,
  } = props;
  const CheckChange = () => {
    changeCheck(id);
    filtering(filterLet);
  };
  return (
    <div name="checkbox" className="checkbox">
      {problem}
      <input type="checkbox" checked={completed} onChange={CheckChange} />
      <button
        className="buttonToDelete"
        onClick={() => {
          removeCard(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Card;
