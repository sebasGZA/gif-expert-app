import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    //   setCategories((cat) => [...cat, "Dragon Ball"]);
    if (categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      <ol>
        {categories.length !== 0 &&
          categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
      </ol>
    </>
  );
};
