/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterRecipe } from '../actions/index';

function RecipeFilter({ recipiesData }) {
  const userIdArry = [];
  const dispatch = useDispatch();

  recipiesData.recipies.map(value => userIdArry.push(value.symbol));

  const filteredArry = Array.from(new Set(userIdArry));

  const handleFilter = ({ target }) => {
    dispatch(filterRecipe(target.value));
  };

  return (
    <div data-testid="recipeFilter" className="bg-secondary my-2 p-2 d-flex justify-content-center align-items-center">
      <label htmlFor="filter" className=" text-white mr-1 mt-1 font-weight-bold">SELECT COMPANY:</label>
      <select className="form-control col-md-3 p-1" onChange={handleFilter}>
        <option value="All" key="All">
          All
        </option>
        {
                    filteredArry.map((recipe, key) => (
                      <option key={key} value={recipe}>
                        {' '}
                        { recipe }
                        {' '}
                      </option>
                    ))
                }
      </select>
    </div>
  );
}

RecipeFilter.propTypes = {
  recipiesData: PropTypes.object.isRequired,
};

export default RecipeFilter;
