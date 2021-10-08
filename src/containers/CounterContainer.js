import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onOnincrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onOndecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onOnincrease}
            onDecrease={onOndecrease}
        />
    );
};

export default CounterContainer;

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
// };

// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = {
//     increase,
//     decrease,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
