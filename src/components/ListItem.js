const ListItem = (props) => (
  <li onClick={(e) => console.log(e)}>{props.item}</li>
);

export default ListItem;
