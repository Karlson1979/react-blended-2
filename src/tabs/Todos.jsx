import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';



export const Todos = () => {
  const [todos, setTodos] = useState(()=>{
     const data = JSON.parse(localStorage.getItem('todo'));
     return data ?? [];
  });

  const addTodo = text => {
    setTodos([...todos, 
      { text, 
        id: nanoid() }]);
  };
    useEffect(()=>{
      const data = JSON.stringify(todos);
      localStorage.setItem('todo', data);
    }, [todos]
    )
    const removeTodo = (idDelete) =>{
      setTodos(todos.filter((item)=> item.id !== idDelete))
    }
  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo}/>
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
