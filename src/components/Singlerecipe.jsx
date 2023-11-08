import {useParams} from 'react-router-dom';
import useContentfulsingle from "../hooks/useContentfulsingle";
import { useEffect, useState } from 'react';


const Singlerecipe = () => {
    const {id} = useParams();
    const {getRecipe} = useContentfulsingle();
    const [recipe, setRecipe] = useState();

    
    useEffect(()=>{
        getRecipe(id)
        .then((data) => {
            setRecipe(data);
            })
            .catch((error) => {
            console.log(error);
            });
    },[])

    return ( 
// create button which uses useNavigate from react router dom to go back to the grid page
        <div>
            <h1>hello world</h1>
            <p>{id}</p>
           <h3>{recipe?.title}</h3> 
            <img src={recipe?.img} alt={recipe?.title}/>
            {/* <p>{recipe.description}</p>
            <ul>{recipe.ingredients}</ul>  */}
        </div>
    );
}

export default Singlerecipe ;


