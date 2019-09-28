import './App.css';
import React from 'react';
import {recipeInput} from "./recipeInput";

function App() {
    return recipeInput(inputInstruction)
}

  const inputInstruction = {
    name: "Napa Kimchi",
    info: {prepTime: 10, cookTime: 10},
    ingredients:
        [{val: 2/3, measure: "cup", description: "Coarse hot pepper flakes (고추가루)"},
          {val: 1/4, measure: "cup", description: "Garlic/Ginger (10:1)"},
          {val: 1/4, measure: "cup", description: "Anchovy sauce + shrimp paste"},
          {val: 3, measure: "T", description: "Korean plum extract (매실청)"},
          {val: 1, measure: "cup", description: "Glutinous rice flour (1:4 Flour to Water)"},
          {val: 1, measure: "", description: "Medium-sized onion"},
          {val: 0.5, measure: "kg", description: "Radish"},
          {val: 5, measure: "lb", description: "Napa cabbage"}],
    instructions:
      [{description: "Cut the cabbage into halves or quarters.", key:1},
        {description: "Put 1/2 of the salt into the brine and put the cabbage into it for 2hrs", key:2},
        {description: "Take the cabbage out and put salt in between the leaves. Put most of the salt towards the base.", key:3},
        {description: "Brine the cabbage in a 10% salt solution for at least 10 hours.", key:4},
        {description: "Add the pepper flakes, anchovy sauce, shrimp paste, sugar, garlic, ginger, plum sauce, " +
              "rice flour mix, radish, and onion into a large bin and mix", key:5},
        {description: "Add the kimchi mix in between all the cabbage leaves", key:6},
        {description: "Put cabbage into an airtight container and remove all the air", key:7},
        {description: "Let sit for half a day to start fermentation.", key:8}],
    image: "./images/kimchi.jpg"
};

export default App;
