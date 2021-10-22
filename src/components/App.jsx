import React from "react";
import "./../styles/App.sass";
import Forma from "./Forma";
import { observer } from "mobx-react";
import store from "./../store";
import Card from "./Card";

const App = () => {
  const {
    addNewCard,
    card,
    changeCheck,
    removeCard,
    filtering,
    filterArray,
    filterLet,
    changeFilterLet,
  } = store; //извлекаем из стора все элементы
  const [task, setTask] = React.useState(""); //юз стейт//хуки
  const filterChange = (filterLet) => {
    changeFilterLet(filterLet);
    filtering(filterLet);
  };
  let getCardArray = undefined;
  if (card) {
    getCardArray = filterArray.map((c, i) => (
      <Card
        key={i}
        {...c}
        changeCheck={changeCheck}
        removeCard={removeCard}
        filtering={filtering}
        filterLet={filterLet}
      />
    ));
  }
  return (
    <div className="wrapper">
      <div className="wrapper-border">
        <Forma
          task={task}
          setTask={setTask}
          addNewCard={addNewCard}
          filtering={filtering}
          filterLet={filterLet}
        />
        <div className="todo-list">
          <h1>Список задач:</h1>
          <div className="todo-item" onClick={() => filterChange(0)}>
            Выполненные
          </div>
          <div className="todo-item" onClick={() => filterChange(1)}>
            Невыполненные
          </div>
          <div className="todo-item" onClick={() => filterChange(2)}>
            Все задачи
          </div>
        </div>
        {getCardArray}
      </div>
    </div>
  );
};

export default observer(App);
