import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = () => {
    //   setCategories((cat) => [...cat, "Dragon Ball"]);
    setCategories(["Dragon Ball", ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      {/* Input*/}
      <AddCategory />

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
    </>
  );
};
