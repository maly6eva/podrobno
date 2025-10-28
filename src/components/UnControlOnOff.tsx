import {useState} from "react";
//
type OnofTypeProps = {
    onChrom: (on: boolean) => void;
}

export const UnContrilOnOff = ({ onChrom}: OnofTypeProps) => {
    const [isOn, setIsOn] = useState<boolean>(true)

function offControlled () {
        setIsOn(false)
        onChrom(false)
}

    function onControlled () {
        setIsOn(true)
        onChrom(true)
    }


    return (
    <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // расстояние между элементами
            margin: "10px"
        }}>
        <div style={{   height: "80px",
            width: "80px",
            backgroundColor: isOn ? "green" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold"}} onClick={onControlled}> ON</div>
        <div style={ {  height: "80px",
            width: "80px",
            backgroundColor: isOn ? "gray" : "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold"}} onClick={offControlled}>  OFF</div>
        <div style={{ height: "30px",
            width: "30px",
            backgroundColor:isOn  ? "green" : "red",
            borderRadius: "50%",}} onClick={() => {setIsOn(true)}}></div>
    </div>

    );
};

