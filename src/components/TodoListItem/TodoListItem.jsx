import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';
export const TodoListItem = ({text, count, removeTodo, id}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button" onClick={()=> removeTodo(id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
