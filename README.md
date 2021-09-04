# Summary
This project is the minimal setup required to reproduce the issue raised in https://github.com/firebase/firebase-js-sdk/issues/5384
It was created with [Create React App](https://github.com/facebook/create-react-app).

When running in development mode this app works correctly, however in production mode it does not.
The relevant code is in `src\App.js`, it simply initialises a firebase app and firestore database, in production the call to `initialiseFirestore` fails with the error `TypeError: r is not a function`, swapping that out for the simpler `getFirestore` works fine.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start-prod`

Builds the app for production to the `build` folder and then serves it using the [serve package](https://github.com/vercel/serve)
The serve package is included as a local dev dependency for convenience.\