import React from 'react';
import { FILTERS } from '../../action/todolist';
import FilterLink from './FilterLink';

const FilterLinkSet = () => (
  <section className="row mt-2 mb-2">
    <div className="btn-group" role="group" aria-label="Basic example">
      <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  </section>
);

export default FilterLinkSet;
