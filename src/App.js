import React, { createContext, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ReactSwitch from "react-switch";

// ______________DarkMode Functionality_____________________
export const themeContext = createContext(null);
// ______________DarkMode Functionality_____________________

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  // ______________DarkMode Functionality_____________________
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  // ______________DarkMode Functionality_____________________

  return (
    <themeContext.Provider value={(theme, toggleTheme)}>
      <div className="app" id={theme}>
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div className="main-container">
          <div className="center-container">
            <TodoInput addList={addList} />
            <h1 className="app-heading">TODO</h1>
            <hr />
            {listTodo.map((listItem, key) => {
              return (
                <TodoList
                  key={key}
                  index={key}
                  item={listItem}
                  deleteItem={deleteListItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
