import React, { useState } from 'react';

function TodoList() {
  const [taskInput, setTaskInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTodoList([...todoList, taskInput]);
      setTaskInput('');
    }
  };

  const handleFinishTask = (task) => {
    setTodoList(todoList.filter((item) => item !== task));
    setCompletedList([...completedList, task]);
  };

  const handleDeleteTask = (task, isCompleted) => {
    if (isCompleted) {
      setCompletedList(completedList.filter((item) => item !== task));
    } else {
      setTodoList(todoList.filter((item) => item !== task));
    }
  };

  const handleTransferTask = (task) => {
    setCompletedList(completedList.filter((item) => item !== task));
    setTodoList([...todoList, task]);
  };

  return (
    <div>
      <h2>Tasks to be Performed</h2>
      <input type="text" value={taskInput} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todoList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleFinishTask(task)}>Finish</button>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul>
        {completedList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(task, true)}>Delete</button>
            <button onClick={() => handleTransferTask(task)}>Transfer to Tasks</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
