import {useState} from "react";


type RatingValue = 0| 1 | 2 | 3 | 4 | 5;

export function UnControlledRating() {
    const [val, setVal] = useState<RatingValue>(0)

    // function resValue(num: RatingValue) {
    //     setVal(num)
    // }

        return (
            <div>
                <Star selected={val >= 1} setVal={() => setVal(1)}/>
                <Star selected={val >= 2} setVal={() => setVal(2)}/>
                <Star selected={val >= 3} setVal={() => setVal(3)}/>
                <Star selected={val >= 4} setVal={() => setVal(4)}/>
                <Star selected={val >= 5} setVal={() => setVal(5)}/>
            </div>
        )

}

type StarProps = {
    selected: boolean
    setVal: () => void;
}

function Star({selected, setVal}: StarProps) {
    return (
        <span onClick={() => setVal()}> {selected ? <b style={ {color: 'red'}}>start</b>
            : "star"} </span>
    )
}