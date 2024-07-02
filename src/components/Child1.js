const Child1 = ({ incrementNumber, decrementNumber }) => {
  return (
    <div
      style={{
        margin: 10,
        border: "1px solid black",
        padding: 10,
      }}
    >
      <button onClick={decrementNumber}>-</button>
      <button onClick={incrementNumber}>+</button>
      <br />I am child 1
    </div>
  );
};

export default Child1;
