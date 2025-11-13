import {Accordion} from './Accordion';
import {action} from "storybook/actions";
import {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion toggled');
const callback2 = action('Same Accordion toggled');

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onChange={callback}
                                                  items={[{value: 1, title: 'kit'}, {
                                                      value: 2,
                                                      title: 'liker'
                                                  }, {value: 3, title: 'opa'}]}
                                                  onClickc={callback2}
/>
export const UsersCollapsedMode = () => <Accordion title={"Users"} collapsed={false} onChange={callback}
                                                   items={[{value: 1, title: 'Katusha'}, {
                                                       value: 2,
                                                       title: 'Milana'
                                                   }, {value: 3, title: 'Ksenia'}]}
                                                   onClickc={callback2}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState(false);
    return <Accordion title={"Interactive Accordion"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{value: 1, title: 'Moloko'}, {value: 2, title: 'Batton'}, {value: 3, title: 'Maslo'}]}
                      onClickc={callback2}/>
}
//
// const meta: Meta<typeof Accordion> = {
//     title: 'Example/Accordion',
//     component: Accordion,
//     tags: ['autodocs'],
// };
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
//
// // Свёрнутый режим
// export const MenuCollapsedMode: Story = {
//     args: {
//         title: 'Menu',
//         collapsed: true,
//         onChange: callback,
//     },
// };
//
// // Развёрнутый режим
// export const UsersUncollapsedMode: Story = {
//     args: {
//         title: 'Users',
//         collapsed: false,
//         onChange: callback,
//     },
// };
//
// // Интерактивный режим (кликабельный)
// export const ModeChanging: Story = {
//     render: (args: AccordionProps) => <Accordion {...args} />,
//     args: {
//         title: 'Interactive Accordion',
//     },
// };