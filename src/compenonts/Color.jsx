import React from "react";


export const ChangeColor = () => {
    const colors = ['red', 'green', 'yellow']
    const [color, setColor] = React.useState(colors[0]);

    const handleChange = (color) => {
        setColor(color);

    }
    return (
        <div style={{ backgroundColor: color }}>
            {
                colors.map((color) => {
                    return (
                        <button key={color} onClick={() => handleChange(color)}>{color}</button>
                    )
                })
            }

        </div>
    )
} 