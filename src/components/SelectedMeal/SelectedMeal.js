import React from 'react';

const SelectedMeal = props => {
    const { strMeal } = props.meal;
    return (
        <tr>
            <td>{strMeal}</td>
        </tr>
    );
};

export default SelectedMeal;