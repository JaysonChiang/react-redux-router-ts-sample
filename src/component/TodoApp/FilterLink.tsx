import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../action/todolist';
import { IStoreState } from '../../reducer';

interface IProps {
  selectedFilter: string;
  filter: string;
  onSetFilter: (filtername: string) => void;
  children?: string;
}

const FilterLink = ({ selectedFilter, filter, onSetFilter, children }: IProps) => {
  if (selectedFilter === filter) {
    return (
      <button className="btn btn-secondary" disabled={true}>
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onSetFilter(filter);
      }}
      className="btn btn-primary"
    >
      {children}
    </button>
  );
};

const mapStateToProps = (state: IStoreState): { selectedFilter: string } => {
  return {
    selectedFilter: state.todolist.filter
  };
};

export default connect(mapStateToProps, {
  onSetFilter: setFilter
})(FilterLink);
