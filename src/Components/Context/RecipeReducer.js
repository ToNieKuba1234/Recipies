export const initialState = {
    recipes: [
        {id: 1, name: 'Spaghetti Carbonara', ingredients: 'makaron, jajka, ser, boczek'},
        {id: 2, name: 'Tiramisu', ingredients: 'biszkopty, kawa, mascarpone, kakao'},
    ],
    favorites: [],
    searchTerm: '',
    newRecipe: { name: '', ingredients: '' }
};

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return { ...state,
                recipes: [
                    ...state.recipes,
                    { id: state.recipes.length + 1, name: action.payload.name, ingredients: action.payload.ingredients}
                ]
            };
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            };
        case 'SET_NEW_RECIPE':
            return {
                ...state,
                newRecipe: {
                    ...state.newRecipe,
                    [action.payload.name]: action.payload.value
                }
            };
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            };
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter(recipe => recipe.id !== action.payload.id)
            };
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id)
            };
        default:
            return state;
    }
};