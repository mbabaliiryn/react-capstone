/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

function RecipeFilter({ recipiesData, filterRecipe }) {
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
                recipiesData.recipes.map(recipe => (
                  <option key={recipe.id} value={recipe.userId}>{ recipe.userId}</option>
                ))
                }

      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  recipiesData: state.recipes,
});

export default connect(mapStateToProps)(RecipeFilter);
