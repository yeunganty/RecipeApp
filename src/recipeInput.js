import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import scale from './images/kitchen-scale.svg';

export function recipeInput(ingredients) {
    const max = 30; /*Make this dyanmic*/
    const WeightSlider = withStyles({
        root: {
            color: '#1a1a1a',
            height: 8,
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 6,
            borderRadius: 4
        },
        rail: {
            height: 6,
            borderRadius: 4
        },
    })(Slider);

    function RecipeName(props) {
        return (
            <div className="recipe-header">
                <h2><u>{props.name}</u></h2>
            </div>
        );
    }

    function RecipeInfo(props) {
        return (
            <div>
                <Grid justify="center" container spacing={5}>
                    <Grid item align="left">Prep Time: {props.input.prepTime}</Grid>
                    <Grid item align="left">Cook Time: {props.input.cookTime}</Grid>
                    <Grid item align="left">Total Time: {props.input.prepTime + props.input.cookTime}</Grid>
                </Grid>
            </div>
        )
    }

    function roundNum(num) {
        if ((num % 1) !== 0)
            return num.toFixed(2);
        else return num;
    }

    function Ingredients(props) {
        const inputVal = props.value;
        const ingredients = props.input.ingredients;
        const ingredientList = ingredients.map((ingredient) =>
            <li>
                <Grid container spacing={1}>
                    <Grid item align="left">{roundNum(ingredient.val * inputVal)} {ingredient.measure} </Grid>
                    <Grid item align="left">{ingredient.description}</Grid>
                </Grid></li>);
        return (
            <ul> {ingredientList} </ul>
        )
    }

    function Instructions(props) {
        const instructions = props.instructions;
        const instructionList = instructions.map((instruction) =>
            <li key={instruction.key}> {instruction.description} </li>);
        return (
            <div className="center-slider">
                <div className="Instruction-header"> <strong>Instructions</strong> {props.name} </div>
                <ol> {instructionList} </ol>
            </div>
        )
    }

    function ServingsSliderIngredients(props) {
        const [value, setValue] = React.useState(1);
        const handleSliderChange = (event, newValue) => {
            setValue(newValue);
        };
        const handleInputChange = event => {
            setValue(event.target.value === '' ? '' : Number(event.target.value));
        };
        const handleBlur = () => {
            if (value < 1) {
                setValue(1);
            } else if (value > max) {
                setValue(max);
            }
        };
        return (
            <div className="center-slider">
                <div className="Ingredient-header"> <strong>Ingredients</strong></div>
                <div className="slider-root">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <img src={scale} className="scale-logo" alt="scale"/>
                        </Grid>
                        <Grid item xs>
                            <WeightSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={5}
                                          value={typeof value === 'number' ? value : 1}
                                          onChange={handleSliderChange}
                                          aria-labelledby="input-slider"
                                          min={1} max={max}/>
                        </Grid>
                        <Grid item>
                            <Input
                                className="slider-input" value={value} margin="dense"
                                onChange={handleInputChange} onBlur={handleBlur}
                                inputProps={{
                                    step: 1, min: 1, max: max, type: 'number', 'aria-labelledby': 'input-slider',
                                }}/>
                        </Grid>
                    </Grid>
                </div>
                <Ingredients input={props.ingredients} value={value}/>
            </div>
        )
    }

    return (
        <span className="block border">
        <div>
            <RecipeName name={ingredients.name}/>
            <RecipeInfo input={ingredients.info}/>
            <ServingsSliderIngredients ingredients={ingredients}/>
            <Instructions instructions={ingredients.instructions}/>
        </div>
        </span>
    );
}
