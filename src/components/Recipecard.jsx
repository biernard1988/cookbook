import { Link } from 'react-router-dom';

const Recipecard = ({recipe}) => {
    return (

        <Link to={`/${recipe.id}`}>
        <div className="col storie-card d-flex gap-4  mb-3 rounded shadow p-3 px-4">
                <img className="w-25" src={recipe.img} alt={recipe.title} />
                <div className="section-text">
                    <h4 className="text-primary mb-5">{recipe.title}</h4>{" "}
                    {/* Display the story title */}
                    <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
                    {recipe.ingredients?.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>;
                    })}
                    </ul>
                </div>
                </div>
        </Link>
    );
}

export default Recipecard;