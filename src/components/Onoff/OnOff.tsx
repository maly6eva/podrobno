import React from "react";

export type OnOffProps = {
    on: boolean;
    onChange: (on: boolean) => void;
};

export const OnOff = React.memo(function OnOff({on, onChange}: OnOffProps) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px"
            }}
        >
            <div
                style={{
                    height: "80px",
                    width: "80px",
                    backgroundColor: on ? "green" : "gray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
                onClick={() => onChange(true)}
            >
                ON
            </div>

            <div
                style={{
                    height: "80px",
                    width: "80px",
                    backgroundColor: on ? "gray" : "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
                onClick={() => onChange(false)}
            >
                OFF
            </div>

            <div
                style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: on ? "green" : "red",
                    borderRadius: "50%"
                }}
            />
        </div>
    );
});
