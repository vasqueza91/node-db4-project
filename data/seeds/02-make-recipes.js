const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon en Papillote' },
]

const ingredients = [
    { ingedient_name: 'Broccoli', ingerdient_unit: 'lbs' },
    { ingedient_name: 'Pesto', ingerdient_unit: 'lbs' },
    { ingedient_name: 'Pasta', ingerdient_unit: 'lbs' },
    { ingedient_name: 'Lemon', ingerdient_unit: 'slices' },
    { ingedient_name: 'Chicken', ingerdient_unit: 'kilos' },
    { ingedient_name: 'Salmon', ingerdient_unit: 'grams' },
]

const steps = [
    { step_text: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_text: 'Add broccoli', step_number: 2, recipe_id: 1 },
    { step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1 },
    { step_text: 'Heat oven', step_number: 1, recipe_id: 2},
    { step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    { step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2},
    { step_text: 'Fish a salmon', step_number: 1, recipe_id: 3},
    { step_text: 'Cook salmon', step_number: 2, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}