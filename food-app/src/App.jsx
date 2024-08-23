import AppName from "./components/AppName";
import AddFood from "./components/AddFood";
import FoodList from "./components/FoodList";
import { useState } from "react";
import "./App.css";
const App = () => {
  let [foodList, setFoodList] = useState([]);

  function handleDeleteFood(foodName) {
    /* let newFoodList = [];
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== foodName) {
        newFoodList.push(foodList[i]);
      }
    }
    setFoodList(newFoodList);
    */

    setFoodList(foodList.filter((fooditem) => fooditem !== foodName));
    console.log("Delete" + foodName);
  }

  function handleAddFood(foodName) {
    setFoodList([...foodList, foodName]);
    console.log(foodName + " is added successfully.");
  }
  return (
    <div>
      <AppName />
      <AddFood onAddFood={handleAddFood} />
      <FoodList foodList={foodList} onDeleteFood={handleDeleteFood} />
    </div>
  );
};

export default App;
