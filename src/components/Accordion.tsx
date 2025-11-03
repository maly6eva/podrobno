import {useState} from "react";

export type AccordionProps = {
    title: string;
    collapsed?: boolean;
    onChange?: () => void;
};

export function Accordion({title, collapsed, onChange}: AccordionProps) {
    const [isCollapsed, setIsCollapsed] = useState(collapsed ?? true);

    const toggleCollapsed = () => {
        setIsCollapsed((col) => !col);
        onChange?.(); // вызываем коллбек при изменении состояния
    };

    return (
        <>
            <AccordionTitle title={title} onClick={toggleCollapsed}/>
            {isCollapsed && <AccordionBody/>}
        </>
    );
}

type TitleProps = {
    title: string;
    onClick: () => void;
};

function AccordionTitle({title, onClick}: TitleProps) {
    return <h3 onClick={onClick}>{title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}