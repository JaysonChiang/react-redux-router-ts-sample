import React from 'react';
import { FILTERS } from '../../action/todolist';
import FilterLink from './FilterLink';

const FilterLinkSet = () => (
  <div>
    Filter
    <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default FilterLinkSet;
