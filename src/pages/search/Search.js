import React, { useState , useEffect} from "react";
import axios from "axios";
import RecipeTile from "../../components/RecipeTile";
import { useForm } from "react-hook-form";
import './Search.css';
import Inputfieldgreen from "../../components/Inputfield-green";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

function Search() {
    const [formState, setFormState] = useState({
        query: '',
        healthLabels: '',
        mealType: '',
        cuisineType: '',
    });

    const { register, handleSubmit,formState: {errors} } = useForm();
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {

            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=any&q=${formState.query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&health=${formState.healthLabels}&cuisineType=${formState.cuisineType}&mealType=${formState.mealType}`);
                if (!result.data.count) {
                    return setAlert("No valid search!")
                }
                console.log(result);
                setRecipes(result.data.hits)
                setFormState(result.data.hits);
                setAlert('')


            } catch (e) {
                console.error(e, 'er is iets fout gegaan');
            }
        }

        if (formState.query !== '') {
            fetchData();
        } else if (formState.query === '')
            return setAlert("Please fill in ingredients");

        return function cleanUp() {
            controller.abort();
        }


    }, [formState.query]);

    function handleFormSubmit(data) {
        console.log(data);
        setFormState(data);
    }

    return (
        <>
            <div className="container">
                <header className="search-header-outer-container">
                    <div className="search-header-inner-container">
                        <h1>Lil' Chef</h1>
                    </div>
                </header>

                <main className="search-main">
                <div className="search-main-outer-container">
                    {setAlert && <Alert alert={alert} /> }
                <form className="search-main-inner-container" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Inputfieldgreen
                        inputType="text"
                        inputName="query"
                        placeholder="Ingredients"
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Ingredients are required',
                            },
                        }}
                        register={register}
                        errors={errors}
                    />
                    {/*<input type="text"*/}
                    {/*       {...register("query")}*/}
                    {/*       placeholder="search"*/}
                    {/*        />*/}
                    <select className="input-field-green"
                        {...register("healthLabels")}>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="paleo">Paleo</option>
                        <option value="dairy-free">Dairy-free</option>
                        <option value="gluten-free">Gluten-free</option>
                        <option value="wheat-free">Wheat-free</option>
                        <option value="fat-free">Fat-free</option>
                        <option value="low-sugar">Low-sugar</option>
                        <option value="egg-free">Egg-free</option>
                        <option value="peanut-free">Peanut-free</option>
                        <option value="tree-nut-free">Tree-nut-free</option>
                        <option value="soy-free">Soy-free</option>
                        <option value="fish-free">Fish-free</option>
                        <option value="shellfish-free">Shellfish-free</option>
                    </select>
                    <select className="input-field-green"
                        {...register("mealType")}>
                        <option value='lunch'>Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="snack">Snack</option>
                    </select>
                    <select className="input-field-green"
                        {...register("cuisineType")}>
                        <option value="chinese">Chinese</option>
                        <option value="american">American</option>
                        <option value="asian">Asian</option>
                        <option value="british">British</option>
                        <option value="caribbean">Caribbean</option>
                        <option value="french">French</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="mediterranean">Mediterranean</option>
                        <option value="mexican">Mexican</option>
                        <option value="middle eastern">Middle eastern</option>
                        <option value="nordic">Nordic</option>
                        <option value="south american">South american</option>
                        <option value="south east asian">South east asian</option>
                    </select>
                    <Button>Search</Button>
                    {/*<button type="submit">Search</button>*/}

                </form>
                    <div className="outer-result-container">
                    <div className="recipe-results">
                        {recipes.map(recipe =>(
                            <RecipeTile
                                title={recipe.recipe.label}
                                calories={recipe.recipe.calories}
                                image={recipe.recipe.image}
                                url={recipe.recipe.url}
                                ingredients={recipe.recipe.ingredients}/>
                        ))}
                    </div>
                    </div>
                </div>

                </main>
                <footer id="footer outer-footer-container">
                    <div className="inner-footer-container">
                    </div>
                    <div className="outer-border-container">
                        <div className="border-container">
                        </div>
                    </div>
                    <div className="copyright-container">
                        <p>©Copyright. All rights reserved.</p>
                    </div>

                </footer>
            </div>
        </>

);
}

export default Search;
