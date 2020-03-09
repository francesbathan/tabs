import React, { useState } from "react";
import styles from "./ToDo.module.css";

function ToDoList(props) {
  const [formState, setFormState] = useState({
    toDo: ""
  });

  const [taskListState, setTaskListState] = useState({
    taskList: [],
    text: "",
    completed: false,
    added: true
  });

  function onChangeHandler(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    const newTaskList = taskListState.taskList.slice();
    const newTask = {
      text: formState.toDo,
      completed: taskListState.completed,
      added: taskListState.added
    };
    newTaskList.push(newTask);
    setTaskListState({
      taskList: newTaskList,
      text: "",
      completed: false,
      added: true
    });
    setFormState({
      toDo: ""
    });
  }

  function handleCheckboxChange(index) {
    const taskList = taskListState.taskList.slice();
    if (taskList[index].completed === true) {
      taskList[index].completed = false;
      setTaskListState({
        taskList
      });
    } else {
      taskList[index].completed = true;
      setTaskListState({
        taskList
      });
    }
  }

  function deleteTask(toDo) {
    let filteredList = taskListState.taskList.slice();
    filteredList = filteredList.filter(task => task.text !== toDo);
    setTaskListState({
      taskList: filteredList
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.header}>To Do List:</h1>
        </div>
        <div>
          <form onSubmit={onSubmitHandler}>
            <input
              name="toDo"
              type="text"
              placeholder="What do you need to do?"
              className={styles.taskInput}
              onChange={onChangeHandler}
              value={formState.toDo}
            />
            <button type="submit" className={styles.addButton}>
              Add
            </button>
          </form>
        </div>
        <div className={styles.taskPanel}>
          <h3>Tasks:</h3>
          <div className={styles.taskList}>
            {taskListState.taskList.map((item, index) => (
              <div key={index} className={styles.tasks}>
                <input
                  type="checkbox"
                  name="completed"
                  className={styles.checkbox}
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(index)}
                ></input>
                <p
                  className={
                    item.completed ? styles.checkedTask : styles.taskStyle
                  }
                >
                  {item.text}
                </p>
                <button
                  type="submit"
                  className={styles.deleteBtn}
                  onClick={() => deleteTask(item.text)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
