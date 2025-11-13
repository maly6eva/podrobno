import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating, type RatingsPropsType} from "./components/Rating.tsx";
import {OnOff} from "./components/OnOff.tsx";
import {UnControlledRating} from "./components/UnControlledRating.tsx";
import {useState} from "react";
import {UnContrilOnOff} from "./components/UnControlOnOff.tsx";


function App() {
    const [retingCont, setRetingCont] = useState<RatingsPropsType>(0)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <>
            <p>Hello!</p>
            <Rating value={retingCont} onClick={setRetingCont}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <div>
                <UnControlledRating/>
            </div>
            <p>Hello!</p>
            <Accordion title={'Jary'}/>
            <Accordion title={'Ira'}/>
            <Accordion title={'Ton'}/>
            <div>
                <OnOff on={switchOn} onChange={setSwitchOn}/>
                <br/>
                <UnContrilOnOff onChrom={setOn}/>{on.toString()}
            </div>
        </>
    )
}


export default App
