import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Meal = props => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    const { handleSelectMeal } = props;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt={strMeal} />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0, 100)}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger w-100" onClick={() => handleSelectMeal(props.meal)}>
                        <FontAwesomeIcon icon={faUtensils} className="me-2" />
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;