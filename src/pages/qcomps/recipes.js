export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];




export default function RecipeList() {
  const listitem =  recipes.map((recipe)=>(
    <li key={recipe.id}><h4>{recipe.name}</h4>
    <ol>
    {Array.from(recipe.ingredients).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
    </li>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
      {listitem}
      </ul>
    </div>
  );
}