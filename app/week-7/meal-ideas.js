"use static";
import React from "react";
import { useState, useEffect } from "react";
import MealIngredients from "./meal-ingredients";

export default function MealIdeas({ mainIngredient }) {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [mealsData, setMealsData] = useState({});
  const [ingredientsIndexToShow, setIngredientsIndexToShow] = useState(-1);

  useEffect(() => {
    setLoading(true);
    setErrorMessage("");
    setMealsData({});

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`
    )
      .then((res) => {
        if (res.ok) return res.json();
        else
          res.json().then((err) => {
            throw new Error(`${res.status} : ${err.message || res.statusText}`);
          });
      })
      .then((data) => {
        const { meals } = data;
        setMealsData(meals);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.error(err.message);
        setLoading(false);
      });
  }, [mainIngredient]);

  if (loading) return <p></p>;
  else if (errorMessage) return <p>{errorMessage}</p>;
  else if (mealsData === null || Object.keys(mealsData).length === 0)
    return <p>Sorry No recipes found with the selected main ingredient.</p>;
  else
    return (
      <section>
        <h2>Meal Ideas</h2>
        <ul>
          {mealsData.map((md, index) => {
            console.log(md);
            return (
              <React.Fragment key={md.idMeal}>
                <li
                  key={md.idMeal}
                  onClick={() =>
                    setIngredientsIndexToShow((prev) => {
                      if (prev === index) return -1;
                      else return index;
                    })
                  }
                >
                  {md.strMeal}
                  {index === ingredientsIndexToShow && (
                    <MealIngredients mealId={md.idMeal} />
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    );
}
