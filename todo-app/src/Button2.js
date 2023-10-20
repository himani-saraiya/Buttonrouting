import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Button2 = () => {
    const totalButtons = 300;
    const [currentButton, setCurrentButton] = useState(0);
    const [buttonColors, setButtonColors] = useState(Array(totalButtons).fill('btn btn-light btn-lg shadow'));

    useEffect(() => {
        const updatedColors = Array(totalButtons).fill('btn btn-light btn-lg shadow');
        if (currentButton >= 0 && currentButton < totalButtons) {
            updatedColors[currentButton] = 'btn btn-danger btn-lg shadow';
        }
        setButtonColors(updatedColors);
    }, [currentButton]);

    const handleButtonClick = async (index) => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error calling the API:', error);
        }
        setCurrentButton(index);
    };

    const renderButtons = () => {
        const buttons = [];
        for (let i = currentButton - 2; i <= currentButton + 3; i++) {
            if (i >= 0 && i < totalButtons) {
                buttons.push(
                    <button
                        className={buttonColors[i]}
                        key={i}
                        onClick={() => handleButtonClick(i)}
                    >
                        {i + 1}
                    </button>
                );
            }
        }
        return buttons;
    };

    return (
        <>
            <div className="container align-middle p-3">
                <div className="p-3 mb-2 bg-dark-subtle text-emphasis-dark fs-1">
                    <h1 className="text-wrap fw-bolder">Pregnancy Day</h1>
                </div>
                <div>
                    {renderButtons()}
                </div>
            </div>
        </>
    );
}

export default Button2;
