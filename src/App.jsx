import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


import styled from 'styled-components'

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px solid #272327;
  color: #272327;
  margin: 0 1em;
  margin-top: 15px;
  padding: 0.25em 1em;
`

  // Input değişikliklerini takip eden fonksiyon
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  // "Ekle" butonuna tıklanınca çalışan fonksiyon
  const handleAddTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  // Yeni bir fonksiyon oluşturulması
  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  // useEffect hook'u ile todos state'ini konsola yazdırma
  useEffect(() => {}, [todos]);

  // Adım 7: "ul" ve "li" elementleri oluşturulması
  const todoList = todos.map((todo, index) => (
    <li key={index} onClick={() => handleRemoveTodo(index)}>
      {todo}
    </li>
  ));

  // Adım 11: Liste elemanına hover efekti eklenmesi
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <label htmlFor="inputGroup-sizing-lg"></label>

      <InputGroup size="lg">
      
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          
          type="text"
          value={todoInput}
          onChange={handleInputChange}
        >
          HEDEF
        </InputGroup.Text>
        <Form.Control
        type="text"
          value={todoInput}
          onChange={handleInputChange}
          
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <Button onClick={addTodo} >
        EKLE
      </Button>
      {/* Adım 7: todos array'ini map ederek li elementleri oluşturulması */}
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoApp;
