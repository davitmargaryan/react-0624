import ListItem from "./ListItem";

const List = ({ list, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default List;
