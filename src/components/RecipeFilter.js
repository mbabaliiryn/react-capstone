/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

function RecipeFilter({ recipiesData, filterRecipe }) {
  const userIdArry = [];

  recipiesData.recipies.map(value => {
    userIdArry.push(value.symbol);
  });

  const filteredArry = Array.from(new Set(userIdArry));
  const handlefilter = ({ target }) => {
    filterRecipe(target.value);
  };

  return (
    <div>
      <select onChange={handleFilter}>
        <option value="All" key="All">
          All
        </option>
        {
                filteredArry.map(recipe => (
                  <option key={recipe} value={recipe}>
                    { recipe }
                  </option>
                ))
                }

      </select>
    </div>
  );
}

export default RecipeFilter;
