import React, {FC, useEffect, useState} from 'react';
import {eatObject} from "../types/Types";

const Recipe:FC<eatObject> = (eat) => {
  const [meals, setMeals] = useState<string[]>([]);

  useEffect(() => {
    const listMeals = (item:any) => {
      let x:Array<string> = [];
      for (let i:number = 1; i < 20; i++ ) {
        if (item[`strIngredient${i}`]) {
          const strIngredient:string = item[`strIngredient${i}`];
          const newMeasure:string = item[`strMeasure${i}`];
          const newMeals:string = `${strIngredient} - ${newMeasure}`;
          x.push(newMeals);
        } else {
          break;
        }
      }
      setMeals(x);
    }
    listMeals(eat);
  }, [eat])

  return (
    <div className="hungry-item">
      <div className="hungry-item__right-title">{eat.strMeal}</div>
      <div className="hungry-item__categories">
        <div className="hungry-item__categories-cat"><span>Category:</span>{eat.strCategory}</div>
        <div className="hungry-item__categories-cat"><span>Area:</span>{eat.strArea}</div>
        <div className="hungry-item__categories-cat"><span>Tags:</span>{eat.strTags}</div>
      </div>
      <div className="hungry-item__top">
        <img src={eat.strMealThumb} alt="" className="hungry-item__img" />
        <div className="hungry-item__right">
          <ul className="hungry-item__right-ingredients">
            {meals.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <div className="hungry-item__right-text">{eat.strInstructions}</div>
        </div>
      </div>
      <h2 className="hungry-item__h2">Video</h2>
      <div className="hungry-item__video">
        <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${eat.strYoutube.slice(-11)}`} title={eat.strMeal}></iframe>
      </div>
    </div>
  );
};

export default Recipe;