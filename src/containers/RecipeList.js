/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipies, filterRecipe, fetchRecipes } from '../actions/index';

import Recipe from '../components/Recipe';
import RecipeFilter from '../components/RecipeFilter';

function RecipeList({
  recipiesData, fetchRecipiesData, filterRecipe, filter,
}) {
  useEffect(() => {
    fetchRecipiesData();
  }, []);
  return recipiesData.loading ? (
    <h1>Loading</h1>
  ) : recipiesData.error ? (
    <h1>{ recipiesData.error }</h1>
  ) : (
    <div>
      <RecipeFilter filterRecipe={filterRecipe} recipiesData={recipiesData} /> {
      recipiesData.recipiesData
        .filter(recipe => (filter === 'All' ? true : (recipe.userId).toString() === filter))
        .map((recipe, key) => (
          <Recipe recipe={recipe} key={key} />
        ))
            }
    </div>
  );
}

const mapStateToProps = state => ({
  recipiesData: state.recipies,
  filter: state.filter,

});

const mapDispatchToProps = dispatch => ({
  fetchRecipiesData: () => dispatch(fetchRecipies()),
  filterRecipe: userId => dispatch(filterRecipe(userId)),

});
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
