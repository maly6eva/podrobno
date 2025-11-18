import React, {useState} from "react";

export default {
    title: 'React/Memo'
}

type NewMessagesCounterProps = {
    count: number
}

type UsersProps = {
    users: string[]
}
const NewMessagesCounter: React.FC<NewMessagesCounterProps> = ({count}) => {
    console.log("Render Counter")
    return <div>
        {count}
    </div>
}

const UsersSelect: React.FC<UsersProps> = ({users}) => {
    console.log("Render Users")
    return <div>
        {users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSelect)
export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Jary', 'Ira', 'Ton'])

    const addUsers = () => {
        const newUsers = [...users, 'Ksenia' + new Date().getTime()]
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUsers}>udd users</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}