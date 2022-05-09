# Leap Inc JavaScript Technical Interview
Welcome!

## Description
In this interview we're going to use some React fundamentals to retrieve a list of galleries from the Art Institute of Chicago's API and formatting the results.

You'll find some high level user stories below that your interviewer will review with you. Feel free to ask questions and clarify the stories as you would in a working situation.

Feel free to use whatever resources you would in your normal day to day including web search etc.

## Resources

* [Art Institute of Chicago Public API](https://api.artic.edu/docs/)

## Requirements

* Node/NPM

## Installation

```
$ npm i
```

## Usage

This repo was bootstrapped with [Create React App](https://create-react-app.dev/). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.\
All test files can be found in [src/__tests__]().

## Instructions

Below you will find two stories for creating a simple React app using the Art Institute of Chicago's API.

### Retrieves a list of Galleries from the Art Institute of Chicago's API and render it in the test app

```
As a User
I want to be presented with a list of galleries
So I can browse the contents of each

The list should include the values from the "title" and "floor" properties
```

* It should return a list of available Galleries ([API docs](https://api.artic.edu/docs/#galleries)).
* It should provide the ability retrieve paginated results.
* It should provide the ability to show different size pages based on "limit".

### Remove galleries from list where "is_closed" is true.

```
As a User
In order to avoid false positives
I should only see galleries where the "is_closed" status is false.
````

### Style the list in the app

```
As a User
I want to be more engaged with this gallery app
I should be presented with this list in a way that is visually appealling
```

* The list should render as a grid with each list item separated by a `1rem` gutter on all sides.
* Each list item should be styled as a `card` using the following styles:
```
border: 1px solid #888;
border-radius: .5rem;
padding: 1rem;
```
