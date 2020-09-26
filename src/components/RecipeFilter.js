/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="bg-secondary my-2 p-2 d-flex justify-content-center align-items-center">
      <label htmlFor="filter" className=" text-white mr-1 mt-1 font-weight-bold">SELECT COMPANY:</label>
      <select className="form-control col-md-3 p-1" onChange={handleFilter}>
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
