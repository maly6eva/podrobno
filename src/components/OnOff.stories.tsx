import type {Meta, StoryObj} from "@storybook/react-vite";
import {OnOff} from "./OnOff.tsx";
import {useState} from "react";

const meta: Meta<typeof OnOff> = {
    title: 'Example/OnOff',
    component: OnOff,
    tags: ['autodocs']
}
export default meta;

type Story = StoryObj<typeof OnOff>;

export const OnMode = () => <OnOff on={true} onChange={x => x}/>
export const OffMode = () => <OnOff on={false} onChange={x => x}/>

export const Interactive: Story = {
    render: () => {
        const [isOn, setIsOn] = useState(true)
        return <OnOff on={isOn} onChange={setIsOn}/>
    }
}