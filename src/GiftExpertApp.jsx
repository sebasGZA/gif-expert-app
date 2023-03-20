import { useState } from "react";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = () => {
    //   setCategories((cat) => [...cat, "Dragon Ball"]);
    setCategories(["Dragon Ball", ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
    </>
  );
};
