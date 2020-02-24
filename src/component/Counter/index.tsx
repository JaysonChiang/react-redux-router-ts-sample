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
  <div>
    <div className="row">
      <input type="text" value={value} className="col-sm-2 text-right" />
    </div>
    <div className="row">
      <button type="button" onClick={() => onIncrement()} className="btn btn-primary col-sm-1">
        +1
      </button>
      <button type="button" onClick={() => onDecrement()} className="btn btn-secondary col-sm-1">
        -1
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ counter }: IStoreState): { value: number } => ({
  value: counter.value
});

export default connect(mapStateToProps, {
  onDecrement: Actions.decreaseNum,
  onIncrement: Actions.increaseNum
})(Counter);
