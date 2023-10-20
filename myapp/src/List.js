import React, { useState } from 'react';
import './List.css';

const List = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Pen', checked: false },
        { id: 2, name: 'Pencil', checked: false },
        { id: 3, name: 'Book', checked: false },
        { id: 4, name: 'Cover', checked: false },
        { id: 5, name: 'Notebook', checked: false },
    ]);

    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckbox = (Id) => {
        const updatedItems = items.map((item) => {
            if (item.id === Id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const SelecteItems = (dir) => {
        const newSelectedItems = dir === 'right'
            ? items.filter((item) => item.checked)
            : selectedItems.filter((item) => item.checked);

        const updatedSelectedItems = dir === 'right'
            ? [...selectedItems, ...newSelectedItems]
            : selectedItems.filter((item) => !item.checked);

        const updatedItems = dir === 'right'
            ? items.filter((item) => !item.checked)
            : [...items, ...newSelectedItems];

        setItems(updatedItems);
        setSelectedItems(updatedSelectedItems);
    };

    return (
        <div className="list-container">
            <div className="item-list">
                <ol>
                    {items.map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheckbox(item.id)}
                            />
                            {item.name}
                        </li>
                    ))}
                </ol>
            </div>
            <div className="buttons">
                <button onClick={() => SelecteItems('right')}>&rarr;</button>
                <button onClick={() => SelecteItems('left')}>&larr;</button>
            </div>
            <div className="selected-items">
                <ul>
                    {selectedItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default List;
