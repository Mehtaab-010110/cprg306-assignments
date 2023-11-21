// ./app/week7/meal-ideas.js

"use client";

import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas
async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            {meal.strMeal}
            {/* Optionally, display the meal thumbnail */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
