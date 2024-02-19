"use client";

import { useState } from "react";

import { FieldCheckBox } from "@/app/components/ui-parts/FieldCheckBox/FieldCheckBox";
import { FieldSubmit } from "@/app/components/ui-parts/FieldSubmit/FieldSubmit";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo: ToDo = {
      id: todos.length,
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3"></div>
          <div className="col-span-2"></div>
          <div className="row-span-2 col-span-2">
            {todos.map((todo) => (
              <FieldCheckBox
                key={todo.id}
                textfieldProps={{
                  value: todo.title,
                }}
                checkboxProps={{}}
              />
            ))}
            <FieldSubmit
              textfieldProps={{
                label: "placeholder",
                value: inputValue,
                onChange: handleChange,
              }}
              buttonProps={{
                label: "Submit",
                onClick: handleAddTodo,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
