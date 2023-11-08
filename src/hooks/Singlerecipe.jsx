import {useParams} from 'react-router-dom'


const Singlerecipe = ((recipe)) => {
const {id} = useParams();


    return ( 

        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.img} alt={recipe.title}/>
            <p>{recipe.description}</p>
            <ul>{recipe.ingredients}</ul>
        </div>
    );
}

export default Singlerecipe ;

