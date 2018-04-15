import { connect, Dispatch } from "react-redux";
import * as Actions from "../../../action/counterAction";
import { IStoreState } from "../../../entity";
import { CounterComponent } from "../../component";

const mapStateToProps = ({ counter: { value } }: IStoreState) => {
    return {
        value
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions.Counter_All>) => {
    return {
        onDecrement: () => dispatch(Actions.decreaseNum()),
        onIncrement: () => dispatch(Actions.increaseNum())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
