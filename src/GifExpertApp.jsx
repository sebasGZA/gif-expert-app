import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = () => {
    //   setCategories((cat) => [...cat, "Dragon Ball"]);
    setCategories(["Dragon Ball", ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      {/* Input*/}
      <AddCategory setCategories={setCategories} />

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
    </>
  );
};
