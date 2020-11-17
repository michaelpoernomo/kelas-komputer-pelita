## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm deploy`

Deploy the app to Firebase hosting

### Temporary solution to fix paths issue (remove bad React control) [#9429](https://github.com/facebook/create-react-app/issues/9429)

```javascript
else if (parsedCompilerOptions[option] !== valueToCheck) {
  if (option === 'paths')
  continue;
```
