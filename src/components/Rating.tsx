

export type RatingsPropsType =  0| 1 | 2 | 3 | 4 | 5

type RatingProps = {
    value: RatingsPropsType
    onClick: (value: RatingsPropsType) => void
}

export function Rating({value, onClick}: RatingProps) {
        return (
            <div>
                <Star selected={value > 0} onClick={onClick} value={1}/>
                <Star selected={value > 1} onClick={onClick} value={2}/>
                <Star selected={value > 2} onClick={onClick} value={3}/>
                <Star selected={value > 3} onClick={onClick} value={4}/>
                <Star selected={value > 4} onClick={onClick} value={5}/>
            </div>
        )

}

type StarProps = {
    selected: boolean
    value:  RatingsPropsType
    onClick: (value:  RatingsPropsType) => void
}

function Star({selected,value, onClick}: StarProps) {

    return (
        <span onClick={() => onClick(value)}>{selected ? <b style={ {color: 'red'}}>star</b> : " star" } </span>
    )
}