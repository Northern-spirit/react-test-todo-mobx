import React from "react";
import "./../styles/Forma.sass";

const Forma = (props) => {
  const { task, setTask, addNewCard, filtering, filterLet } = props;
  const addCard = (task, setTask, filterLet) => {
    addNewCard(task, setTask);
    filtering(filterLet);
  };
  return (
    <div>
      <input
        className="form-item"
        type="text"
        placeholder="Введите задачу"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        className="form-item"
        onClick={() => {
          addCard(task, setTask, filterLet);
        }}
      >
        Добавить задачу
      </button>
    </div>
  );
};

export default Forma;
