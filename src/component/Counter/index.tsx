import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../action/counter';
import { IStoreState } from '../../reducer';

interface IProps {
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Counter = ({ value, onIncrement, onDecrement }: IProps) => (
  <>
    <div className="col-lg-5 col-md-12 col-sm-12 pt-16 pt-lg-6">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Counter</h1>
          <p className="lead">
            This is simple counter for practice React and TypeScript. 
          </p>
        </div>
      </div>
    </div>
    <section className="col-lg-5 col-md-12 col-sm-12 pt-16 pt-lg-6">
      <div className="row mt-2 mb-2">
        <input type="text" value={value} className="form-control flex-grow-1" />
      </div>
      <div className="row ">
        <button
          type="button"
          onClick={() => onIncrement()}
          className="btn btn-primary flex-grow-1 mr-2"
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => onDecrement()}
          className="btn btn-secondary flex-grow-1"
        >
          -1
        </button>
      </div>
    </section>
  </>
);

const mapStateToProps = ({ counter }: IStoreState): { value: number } => ({
  value: counter.value,
});

export default connect(mapStateToProps, {
  onDecrement: Actions.decreaseNum,
  onIncrement: Actions.increaseNum,
})(Counter);
