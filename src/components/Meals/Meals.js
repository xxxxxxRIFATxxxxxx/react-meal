import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Meal from '../Meal/Meal';
import SelectedMeal from '../SelectedMeal/SelectedMeal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    const handleSelectMeal = meal => {
        const newCart = [...cart, meal];
        setCart(newCart);
    };

    useEffect(() => {
        fetch("./meals.json")
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    return (
        <div className="container">
            <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Search Food" />
                <button className="input-group-text btn btn-danger">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div className="row">
                <div className="col-9">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            meals.map(meal => {
                                return (
                                    <Meal
                                        key={meal.idMeal}
                                        meal={meal}
                                        handleSelectMeal={handleSelectMeal}
                                    >
                                    </Meal>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="col-3">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr className="bg-danger">
                                <th scope="col" className="text-center text-white">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(meal => <SelectedMeal meal={meal} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Meals;