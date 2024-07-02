const Child = ({ number }) => {
  return (
    <div
      style={{
        margin: 10,
        border: "1px solid black",
        padding: 10,
      }}
    >
      I am child {number}
    </div>
  );
};

export default Child;
