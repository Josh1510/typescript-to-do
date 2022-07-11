import React, { useState, Dispatch, SetStateAction, FunctionComponent } from 'react';

import ToDoItems from './ToDoItem';
import { v4 as uuidV4 } from 'uuid';

export default function ToDoForm(props: { items: ToDoItem[]; setItems: Dispatch<SetStateAction<ToDoItem[]>> }) {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newItem: ToDoItem = {
      id: uuidV4(),
      title: value,
      completed: false,
      createdAt: new Date(),
    };

    props.setItems([...props.items, newItem]);

    setValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="new-task-input" onChange={handleChange} value={value}></input>
      <button type="submit">Add</button>
    </form>
  );
}
