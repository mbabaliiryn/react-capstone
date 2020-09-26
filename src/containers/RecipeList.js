/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipies } from '../actions/index';
import Recipe from '../components/Recipe';
import RecipeFilter from '../components/RecipeFilter';
import NavBar from '../components/NavBar';

function RecipeList() {
  useEffect(() => {
    dispatch(fetchRecipiesData());
  }, []);
  const dispatch = useDispatch();
  const recipiesData = useSelector(state => state.recipies);
  const filter = useSelector(state => state.filter);
  return recipiesData.loading ? (
    <h1>Loading</h1>
  ) : recipiesData.error ? (
    <h1>{ recipiesData.error }</h1>
  ) : (
    <div>
      <NavBar />
      <div className="col-md-12 general-section">
        <RecipeFilter recipiesData={recipiesData} />
        <div className="col-md-12 d-flex row">
          {
          recipiesData.recipies
            .filter(recipe => (filter === 'All' ? true : recipe.symbol === filter))
            .map((recipe, key) => (
              <Recipe recipe={recipe} key={key} />
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
