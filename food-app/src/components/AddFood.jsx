const AddFood = ({ onAddFood }) => {
  function handlekeyUp(e) {
    if (e.key === "Enter") {
      onAddFood(e.target.value);
    }
  }
  return (
    <div className="add-food">
      <input
        type="text"
        placeholder="Type Food Name Here."
        onKeyUp={handlekeyUp}
      />
    </div>
  );
};

export default AddFood;
