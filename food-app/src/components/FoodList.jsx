import Food from "./Food";
const FoodList = ({ foodList, onDeleteFood }) => {
  return (
    <div className="food-list">
      {foodList.map((food) => (
        <Food foodName={food} onDeleteFood={onDeleteFood} key={food} />
      ))}
    </div>
  );
};

export default FoodList;
