import React, {FC, useState} from 'react';
import {eatObject} from "./types/Types";
import Recipe from "./components/Recipe";

const App:FC = () => {
    const [eat, setEat] = useState<eatObject>({
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMealThumb: '',
        strMeal:'',
        strInstructions: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strCategory: '',
        strArea: '',
        strTags: '',
        strYoutube: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [hideEat, setHideEat] = useState(false);

    const getMeal = async (event:any) => {
        event.preventDefault();
        setHideEat(true);
        setIsLoading(true);

        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                setEat(res.meals[0]);
                setIsLoading(false);
            })
    }

  return (
    <div className="App wrap">
      <div className="hungry-h1">Feeling hungry?</div>
      <p className="hungry-text">Get a random meal by clicking below</p>
      <div className="hungry-btn">
        <button className="hungry-link" onClick={getMeal}>get meal</button>
      </div>
        {hideEat
            ? isLoading
                ? <h1 className="loading">Loading...</h1>
                : <Recipe {...eat} />
            : null
        }
    </div>
  );
}

export default App;
