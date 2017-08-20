# How to contribute to this repository

## Adding input methods

This repo wants to be a comprehensive collection of input methods for all operating systems. Additional input methods are always welcome! The [`documentation`](https://github.com/danburzo/input-methods/issues?q=is%3Aissue+is%3Aopen+label%3Adocumentation) label tracks methods that need documenting.

## Fixing bugs and enhancing the UI Event Viewer

### Running the viewer locally

You'll need to have Node and NPM installed. Yarn is nice, but you can swap any `yarn` command with `npm`. Clone the repository and run `yarn` (or `npm install`) to fetch all the dependencies.

To run the server:

`yarn start`

and visit [`http://localhost:8080`](http://localhost:8080).

If you make changes on the viewer and you want them reflected on [the online demo](https://danburzo.github.io/input-methods/), run:

`yarn build`

before committing the changes to the repo. This will update the files in the `ui-event-viewer/dist` folder that are used by the demo. (The repository uses Github Pages served from the `master` branch).