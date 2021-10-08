import { createAction, handleActions } from 'redux-actions';
// Ducks 패턴

// 액션 타입 정의하기
// 모듈 이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
    number: 0,
};

// 리듀서 함수 만들기
// 순수함수여야 한다.
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

export default counter;
