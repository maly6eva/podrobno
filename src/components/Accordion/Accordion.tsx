import React, {useReducer} from "react";

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

type ActionType = {
    type: string;
}

type StateType = {
    collapsed: boolean
}
const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Unknown action type');
    }
}

export const Accordion = React.memo(function Accordion({
                                                           title,
                                                           onChange,
                                                           items,
                                                           onClickc
                                                       }: AccordionProps) {
    // const [isCollapsed, setIsCollapsed] = useState(collapsed ?? true);
    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    const toggleCollapsed = () => {
        dispatch({type: TOGGLE_COLLAPSED});
        onChange?.(); // вызываем колбэк
    };

    return (
        <>
            <AccordionTitle title={title} onClick={toggleCollapsed}/>
            {state.collapsed && <AccordionBody items={items} onClickc={onClickc}/>}
        </>
    );
})

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