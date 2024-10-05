import { Grid, TodoListItem, GridItem } from "components";

export const TodoList = ({todos, removeTodo}) => {
   
  return (
    <Grid>
      {todos.map((item, index)=>{
        return <GridItem key={item.id}>
          <TodoListItem text={item.text} count={index + 1} removeTodo={removeTodo} id={item.id}/>
        </GridItem>
      })}
    </Grid>
  )
};
