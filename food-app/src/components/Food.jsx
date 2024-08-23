const Food = ({ foodName, onDeleteFood }) => {
  function handleClick() {
    onDeleteFood(foodName)
  }
  return (
    <div className="food">
      <strong>{foodName}</strong>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default Food;
