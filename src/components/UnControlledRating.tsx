import {useReducer} from "react";


type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;


const RATING_VALUE = 'RATING_VALUE'

type ActionType = {
    type: typeof RATING_VALUE;
    payload: RatingValue;
}

type StateType = {
    val: RatingValue
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case RATING_VALUE:
            return {
                ...state,
                val: action.payload
            }
        default:
            throw new Error("Unknown action type");
    }
}

export function UnControlledRating() {
    // const [val, setVal] = useState<RatingValue>(0)
    const [state, dispatch] = useReducer(reducer, {val: 0})

    const setRating = (num: RatingValue) => {
        dispatch({type: RATING_VALUE, payload: num})
    }

    // function resValue(num: RatingValue) {
    //     setVal(num)
    // }

    return (
        <div>
            <Star selected={state.val >= 1} setVal={() => setRating(1)}/>
            <Star selected={state.val >= 2} setVal={() => setRating(2)}/>
            <Star selected={state.val >= 3} setVal={() => setRating(3)}/>
            <Star selected={state.val >= 4} setVal={() => setRating(4)}/>
            <Star selected={state.val >= 5} setVal={() => setRating(5)}/>
        </div>
    )

}

type StarProps = {
    selected: boolean
    setVal: () => void;
}

const Star = (function Star({selected, setVal}: StarProps) {
    return (
        <span onClick={() => setVal()}> {selected ? <b style={{color: 'red'}}>start</b>
            : "star"} </span>
    )
})