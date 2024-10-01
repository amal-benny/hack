import React, { useEffect, useState } from 'react';

const DailyRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchAll = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await res.json();
      setRecipe(data.meals[0]); 
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="bg-white p-4 m-4 shadow-lg rounded-md">
        <button onClick={fetchAll} className=' bg-sky-400 p-2 rounded font-bold text-lg'>Refresh</button>
      <h1 className="text-black text-[30px] font-bold text-center">Daily Recipe</h1>
      
      {recipe ? (
        <>
          <h2 className="text-black text-[25px] font-bold text-center mt-4">{recipe.strMeal}</h2>
          <div className="flex justify-center mt-4">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-[300px] h-[300px] object-cover rounded-md shadow-lg"
            />
          </div>
          <p className="text-gray-700 text-[18px] text-center mt-4">Category: {recipe.strCategory}</p>
          <p className="text-gray-700 text-[18px] text-center mt-2">Cuisine: {recipe.strArea}</p>
          <div className="mt-4">
            <h3 className="text-black text-[20px] font-bold">Instructions:</h3>
            <p className="text-gray-600 text-[16px] mt-2">{recipe.strInstructions}</p>
          </div>
        </>
      ) : (
        <p className="text-center mt-4">Loading...</p> // Loading state
      )}
    </div>
  );
};

export default DailyRecipe;
