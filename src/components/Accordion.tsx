import {useState} from "react";

type  AccordionProps = {
    title: string
}

export function Accordion({title}: AccordionProps) {
    const [collapsed, setCollapsed] = useState(true)


    const resultCollapsed = () => {
        setCollapsed((col) => !col)
    }

    return (
        <>
            <AccordionTitle title={title} onClick={resultCollapsed}/>
            {collapsed && <AccordionBody/>}
        </>
    )
}


type TitleProps = {
    title: string
    onClick: () => void
}

function AccordionTitle({title, onClick}: TitleProps) {
    console.log('Accordion')
    return (
        <>
            <h3 onClick={() => onClick()}>{title}</h3>
        </>
    )
}


function AccordionBody() {
    console.log('Accordion')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}