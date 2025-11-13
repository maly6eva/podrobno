import {useState} from "react";
import {Select} from "./Select.tsx";


export default {
    title: 'Example/Select',
    component: Select,
}

export const SelectExample = () => {
    const [value, setValue] = useState(1);
    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: 1, title: 'kit'},
                {value: 2, title: 'liker'},
                {value: 3, title: 'opa'}]}
        />
    )
}

export const SelectExample2 = () => {
    const [value, setValue] = useState(2)

    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: 1, title: 'kit'},
                {value: 2, title: 'liker'},
                {value: 3, title: 'opa'}]}
        />
    </>
}