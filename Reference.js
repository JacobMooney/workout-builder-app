//API Site - https://wger.de/en/software/api

//Public Endpoints
// daysofweek
// equipment
// exercise
// exerciseinfo
// exercisecategory
// exercisecomment
// exerciseimage
// ingredient
// ingredientinfo
// ingredienttoweightunit
// language
// license
// muscle
// weightunit
// setting-repetitionunit
// setting-weightunit

// //All Routes
// "day": "https://wger.de/api/v2/day/",
// "set": "https://wger.de/api/v2/set/",
// "setting": "https://wger.de/api/v2/setting/",
// "workout": "https://wger.de/api/v2/workout/",
// "templates": "https://wger.de/api/v2/templates/",
// "public-templates": "https://wger.de/api/v2/public-templates/",
// "workoutsession": "https://wger.de/api/v2/workoutsession/",
// "workoutlog": "https://wger.de/api/v2/workoutlog/",
// "schedulestep": "https://wger.de/api/v2/schedulestep/",
// "schedule": "https://wger.de/api/v2/schedule/",
// "daysofweek": "https://wger.de/api/v2/daysofweek/",
// "language": "https://wger.de/api/v2/language/",
// "license": "https://wger.de/api/v2/license/",
// "userprofile": "https://wger.de/api/v2/userprofile/",
// "setting-repetitionunit": "https://wger.de/api/v2/setting-repetitionunit/",
// "setting-weightunit": "https://wger.de/api/v2/setting-weightunit/",
// "exerciseinfo": "https://wger.de/api/v2/exerciseinfo/",
// "exercisebaseinfo": "https://wger.de/api/v2/exercisebaseinfo/",
// "exercise": "https://wger.de/api/v2/exercise/",
// "equipment": "https://wger.de/api/v2/equipment/",
// "exercisecategory": "https://wger.de/api/v2/exercisecategory/",
// "exerciseimage": "https://wger.de/api/v2/exerciseimage/",
// "video": "https://wger.de/api/v2/video/",
// "exercisecomment": "https://wger.de/api/v2/exercisecomment/",
// "muscle": "https://wger.de/api/v2/muscle/",
// "ingredient": "https://wger.de/api/v2/ingredient/",
// "ingredientinfo": "https://wger.de/api/v2/ingredientinfo/",
// "weightunit": "https://wger.de/api/v2/weightunit/",
// "ingredientweightunit": "https://wger.de/api/v2/ingredientweightunit/",
// "nutritionplan": "https://wger.de/api/v2/nutritionplan/",
// "nutritionplaninfo": "https://wger.de/api/v2/nutritionplaninfo/",
// "nutritiondiary": "https://wger.de/api/v2/nutritiondiary/",
// "meal": "https://wger.de/api/v2/meal/",
// "mealitem": "https://wger.de/api/v2/mealitem/",
// "weightentry": "https://wger.de/api/v2/weightentry/",
// "gallery": "https://wger.de/api/v2/gallery/",
// "measurement": "https://wger.de/api/v2/measurement/",
// "measurement-category": "https://wger.de/api/v2/measurement-category/"

//Base URL
// https://wger.de/api/v2/muscle/?format=json&language=2&limit=100
// additional params - add ? followed by conditons
// format=json - needed for json format
// language=2, for english
// limit=number, number of results, default is 20
// equipment=number, for specific equipment choices

// Special Endpoint for images - api/v2/exerciseimage/<id>/thumbnails/

import fetch from "node-fetch";

async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

let language = 2;
let limit = 100;
let equipment = 1;
let muscle = 1;

let link = `https://wger.de/api/v2/exercise/?format=json&language=${language}&muscles=${muscle}&equipment=${equipment}`

getData(link); 

console.log(link);
