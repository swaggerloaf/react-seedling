import { connect } from 'react-redux'
import { decrement, increment } from '../actions'
import Counter from './Counter.jsx';

const mapStateToProps = (state) => {
  return {
    value: state
  };
};

const mapDispatchToProps = { increment, decrement};


const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer;
