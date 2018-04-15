import * as React from "react";
import { FILTERS } from "../../../action/todolistAction";
import FilterLink from "../../container/FilterLink";

const FilterLinkSet = () => (
    <div>
        <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default FilterLinkSet;
