// import {useState} from "react";

type OnfTypeProps = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = ({on,  onChange}:OnfTypeProps) => {
    // const [isOn, setIsOn] = useState<boolean>(true)




    return (
    <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // расстояние между элементами
            margin: "10px"
        }}>
        <div style={{   height: "80px",
            width: "80px",
            backgroundColor: on ? "green" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold"}} onClick={() => {onChange(true)}}>  ON</div>
        <div style={ {  height: "80px",
            width: "80px",
            backgroundColor: on ? "gray" : "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold"}} onClick={() => {onChange(false)}}>  OFF</div>
        <div style={{ height: "30px",
            width: "30px",
            backgroundColor: on  ? "green" : "red",
            borderRadius: "50%",}} onClick={() => {onChange(true)}}></div>
    </div>

    );
};

