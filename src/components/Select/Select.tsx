import {type KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'

type ItemsValue = {
    value: number
    title: string
}
type SelectProps = {
    value: number
    onChange: (value: number) => void
    items: ItemsValue[]
}

export const Select = ({value, onChange, items}: SelectProps) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<number | null>(value)

    const selectItem = items.find(i => i.value === value)
    const hoveredElement = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])
    const toggleItems = () => setActive(prev => !prev)
    const onItemClick = (value: number) => {
        onChange(value)
        toggleItems()
    }


    {/*<select value={value} onChange={e => onChange(Number(e.currentTarget.value))}>*/
    }
    {/*    {items.map(item => (*/
    }
    {/*        <option key={item.value} value={item.value}>{item.title}</option>*/
    }
    {/*    ))}*/
    }
    {/*</select>*/
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretandentElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

                    if (pretandentElement) {
                        onChange(pretandentElement.value)
                        return
                    }
                }
            }
            if (!selectItem) {
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={s.main} onClick={toggleItems}>
        {selectItem ? selectItem.title : 'Select...'}
      </span>

            {active && (
                <div className={s.dropdown}>
                    {items.map(i => (
                        <div
                            key={i.value}
                            className={`${s.option} ${hoveredElement === i ? s.selected : ''}`}
                            onClick={() => onItemClick(i.value)}
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                        >
                            {i.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}