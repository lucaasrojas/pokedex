# Pokedex

This project was developed for a technical interview.
Link: [Pokedex](https://lucaasrojas-pokedex.netlify.app/)

## Requirements
- Paginated list
- Detail page
- Add Pokemon (Does not use the API)
- 

## How to use it

Once the project is running (See Available Scripts section) a new tab will be opened

## Development considerations

- MaterialUI for the styling and the mayority of the components to save time
- Jest / Testing Library
- There are a few tests to show how I use to solve them
- Context API was implemented in order to have the pokemons list available for the entire project and prevent props drilling
- The new pokemon modal is very simple to show the main idea, it is possible to increase the fields but it will be redundant for this case
- The custom pokemons are shown above the main grid to give the more importance and make visible the diference


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
