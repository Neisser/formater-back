
# Getting Started with Formater.io Backend

Formater.io its an app that allows you get data from multiple files in CSV and format them in order to get them in json.

## Authors

- [@neisser](https://www.github.com/neisser)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The base url is [http://localhost:3001](http://localhost:3001) to receive requests.

```bash
  npm run start
```

### `npm test`

```bash
  npm run test
```

### `npm inspect`

Allows you to open the console in the browser to debug the application.

```bash
  yarn run inspect
```

## API Reference

### Get formated data from files

```http
  POST /files/data
```

#### Example Response

```javascript
[
  {
      "file": "file1.csv",
      "lines": [
        {
        "text" :"RgTya",
        "number": 64075909,
        "hex": "70ad29aacf0b690b0467fe2b2767f765"
        }, ...
      ]
  }, ...
]
```
