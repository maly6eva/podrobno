import {useState} from "react";

type AccordionItemType = {
    value: number;
    title: string;
};

export type AccordionProps = {
    title: string;
    collapsed?: boolean;
    onChange?: () => void;
    items: AccordionItemType[];
    onClickc: (value: number) => void; // ✅ правильный тип
};

export function Accordion({title, collapsed, onChange, items, onClickc}: AccordionProps) {
    const [isCollapsed, setIsCollapsed] = useState(collapsed ?? true);

    const toggleCollapsed = () => {
        setIsCollapsed(prev => !prev);
        onChange?.(); // вызываем колбэк
    };

    return (
        <>
            <AccordionTitle title={title} onClick={toggleCollapsed}/>
            {!isCollapsed && <AccordionBody items={items} onClickc={onClickc}/>}
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

export type AccordionBodyProps = {
    items: AccordionItemType[];
    onClickc: (value: number) => void;
};

function AccordionBody({items, onClickc}: AccordionBodyProps) {
    return (
        <ul>
            {items.map(i => (
                <li key={i.value} onClick={() => onClickc(i.value)}>
                    {i.title}
                </li>
            ))}
        </ul>
    );
}