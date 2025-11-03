import type {Meta, StoryObj} from '@storybook/react-vite';
import {Accordion, type AccordionProps} from './Accordion';
import {action} from "storybook/actions";


const callback = action('Accordion toggled');

const meta: Meta<typeof Accordion> = {
    title: 'Example/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

// Свёрнутый режим
export const MenuCollapsedMode: Story = {
    args: {
        title: 'Menu',
        collapsed: true,
        onChange: callback,
    },
};

// Развёрнутый режим
export const UsersUncollapsedMode: Story = {
    args: {
        title: 'Users',
        collapsed: false,
        onChange: callback,
    },
};

// Интерактивный режим (кликабельный)
export const ModeChanging: Story = {
    render: (args: AccordionProps) => <Accordion {...args} />,
    args: {
        title: 'Interactive Accordion',
    },
};