"use static"
import { useState, useEffect } from "react";

export default function MealIdeas({ mainIngredient }) {
    if (!mainIngredient) return;

    const [loading, setLoading] = useState(true);
    const [mealsData, setMealsData] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`)
            .then(res => res.json())
            .then(({ meals }) => {
                if (!meals) {
                    setMealsData([]);
                    setLoading(false);
                }
                else {
                    setMealsData(meals);
                    setLoading(false);
                }
            })
            .catch(err => console.error(err));
    }, [mainIngredient]);

    return (
        !loading && (
            mealsData.length === 0
                ?
                <p>Sorry No recipes found with the selected main ingredient.</p>
                :
                <section>
                    <h2>Meal Ideas</h2>
                    <ul>
                        {mealsData.map((md) => {
                            console.log(md);
                            return (
                                <li key={md.idMeal}>{md.strMeal}</li>
                            );
                        })}
                    </ul>
                </section>
        )
    );
}