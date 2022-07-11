import React, { useState, Dispatch, SetStateAction } from 'react';
import { isTemplateExpression } from 'typescript';

export default function ToDoItem(props: { items: ToDoItem[]; setItems: Dispatch<SetStateAction<ToDoItem[]>> }) {
  const toggleCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    // loop over the todos list and find the provided id.
    let updatedList = props.items.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, completed: !item.completed };
      }
      return item; // else return unmodified item
    });

    props.setItems(updatedList); // set state to new object with updated list
  };

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <input type="checkbox" checked={item.completed} id={item.id} onChange={toggleCompleted} />
          <label>{item.title}set</label>
        </li>
      ))}
    </ul>
  );
}
