import {type ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef} id={'inputRef'}/>
        <button onClick={save}> - save</button>
        - {value}
    </>
}


export const ControlledInput = () => {
    const [current, setCurrent] = useState("")

    const resChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrent(e.currentTarget.value)
    }
    return (
        <input value={current} type="text" onChange={resChange}/>
    )
}

export const ControlledCheckbox = () => {
    const [current, setCurrent] = useState(false)

    const resChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrent(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={current} onChange={resChange}/>
    )
}

export const ControlledSelected = () => {
    const [current, setCurrent] = useState<string | undefined>(undefined)

    const onCange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrent(e.currentTarget.value)
    }
    return (
        <select value={current} onChange={onCange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    )
}