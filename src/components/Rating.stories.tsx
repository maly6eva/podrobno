import type {Meta, StoryObj} from "@storybook/react-vite";
import {Rating, type RatingsPropsType} from "./Rating.tsx";
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    title: 'Example/Rating',
    component: Rating,
    tags: ['autodocs']
}
export default meta;

type Story = StoryObj<typeof Rating>


export const Rating1 = () => <Rating value={1} onClick={(x) => x}/>
export const Rating2 = () => <Rating value={2} onClick={(x) => x}/>
export const Rating3 = () => <Rating value={3} onClick={(x) => x}/>
export const Rating4 = () => <Rating value={4} onClick={(x) => x}/>
export const Rating5 = () => <Rating value={5} onClick={(x) => x}/>
export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState<RatingsPropsType>(0)
        return <Rating value={value} onClick={setValue}/>
    }
}