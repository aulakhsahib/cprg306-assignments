import { useEffect, useState } from "react";

export default function MealIngredients({ mealId }) {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    setErrorMessage("");
    setMealDetails({});

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => {
        if (res.ok) return res.json();
        else
          res.json().then((err) => {
            throw new Error(`${res.status} : ${err.message || res.statusText}`);
          });
      })
      .then((data) => {
        const { meals } = data;
        console.log(meals[0]);
        setMealDetails(meals[0]);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.error(err.message);
        setLoading(false);
      });
  }, [mealId]);

  let ingredientListToRender = [];
  if (Object.keys(mealDetails).length !== 0) {
    let i = 1;
    while (mealDetails[`strMeasure${i}`] && mealDetails[`strIngredient${i}`]) {
      ingredientListToRender.push(
        <p>
          {mealDetails[`strMeasure${i}`]} {mealDetails[`strIngredient${i}`]}
        </p>
      );
      i++;
    }
  }

  if (loading) return <p></p>;
  else if (errorMessage) return <p>{errorMessage}</p>;
  else if (Object.keys(mealDetails).length === 0)
    return <p>Sorry No Data Found</p>;
  else return ingredientListToRender;
}
