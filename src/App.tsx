import React, { useState, Dispatch, SetStateAction } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidV4 } from 'uuid';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';

function App() {
  const [items, setItems] = useState<ToDoItem[]>([]);

  return (
    <div className="App">
      <header className="App-header"></header>

      {/* <ul>
        {items.map((item) => (
          <ToDoItem {...item} />
        ))}
      </ul> */}
      <ToDoItem items={items} setItems={setItems} />
      <ToDoForm items={items} setItems={setItems} />
    </div>
  );
}

export default App;
