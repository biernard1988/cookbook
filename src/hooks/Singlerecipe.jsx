const Singlerecipe = ((recipe)) => {
    return ( 

        <div className="">
            <h3>{recipe.title}</h3>
            <img src={recipe.img} alt={recipe.title}/>
            <p>{recipe.description}</p>
            <ul className="d-flex flex-column gap-1 list-unstyled fst-italic">
                    {recipe.ingredients?.map((ingredient) => {
                        return <li>{ingredient}</li>;
                    })}
                    </ul>
        </div>
    );
}

export default Singlerecipe ;

