import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

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

      {categories.length !== 0 &&
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
