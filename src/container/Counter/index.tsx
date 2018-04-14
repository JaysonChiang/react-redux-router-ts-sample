import {connect, Dispatch} from 'react-redux'
import * as Actions from '../../action'
import {CounterComponent} from '../../component'
import {IStoreState} from '../../entity'


export function mapStateToProps({counter:{value}}:IStoreState){
    return {
        value
    }
}


export function mapDispatchToProps(dispatch:Dispatch<Actions.All>){
    return {
        onDecrement:()=>dispatch(Actions.decreaseNum()),
        onIncrement:()=>dispatch(Actions.increaseNum()),
    }
}

export function mergeProps(stateProps:any, dispatchProps:any, ownProps:any){
    return {...ownProps, ...stateProps, ...dispatchProps};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CounterComponent)