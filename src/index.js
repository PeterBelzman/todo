import React from "react"; // обязательная библиотека для работы
import ReactDOM from "react-dom"; // обязательная библиотека для рендеринга
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); // перрвый - элемент для рендеринга, второй - элемент, куда рендерить
