const ListItem = ({ item, deleteTodo, toggleTodo }) => {
  return (
    <div className="todoItem">
      <div
        style={{
          textDecoration: item.done ? "line-through" : "none",
          fontWeight: item.done ? "normal" : "bold",
          color: item.done ? "gray" : "black",
          fontSize: 24,
        }}
      >
        {item.name}
      </div>
      <div>
        <button onClick={() => toggleTodo(item.id)}>
          {item.done ? "Undone" : "Done"}
        </button>
        <button onClick={() => deleteTodo(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default ListItem;
