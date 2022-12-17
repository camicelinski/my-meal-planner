## 🔍 Overview

### My Meal Planner :calendar:

My Meal Planner App is a weekly **React calendar** with **local API** (JSON Server) as a database to manage meals and recipes. The calendar is rendered from the database and contains a form to submit new meals. Besides that, user can get recipes from [**spoonacular API**](https://spoonacular.com/food-api), save them to the database and add them to a meal.

&nbsp;

### :bulb: Features

- **add meals** with the specification of:
    - date
    - type (breakfast, elevenses, lunch, snacks, dinner)
    - name (recipe)
    - number of servings
    - note
- form fields are **validated**
- **remove meals**
- renderd **meals** are sorted by order and by date
- meals are saved/removed using **local API** (JSON Server)
- navigation through different pages using **React Router**
- **get recipes** from [**spoonacular API**](https://spoonacular.com/food-api)
- **save recipes** using **local API** (JSON Server) and **add them to a meal**
- **recipe page** with the specification of:
    - title
    - picture
    - ingredients
    - preparation time
    - number of servings
    - instructions
- list of recipes **paginated** with a limit of 5 recipes per page
- my meal planner is responsive

&nbsp;

## :hammer_and_pick: Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

&nbsp;

## ⚙️ Installation

The project uses [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [JSON server](https://www.npmjs.com/package/json-server). Follow the steps below to run it locally.

- Clone the project using:

```bash
  git clone
```

- Go to the project directory and install all dependencies:

```bash
  npm i
```

- To run webpack and create a localhost in developer mode type:

```bash
  npm start
```
- To run JSON-server type in second terminal:

```bash
  json-server --watch ./src/db/data.json --port 3005
```

- The calendar should be available at:

  http://localhost:3000/


&nbsp;

## 🔗 Useful resources

- [official React website](https://reactjs.org/docs/getting-started.html)
- [50 Gorgeous Color Schemes From Award-Winning Websites](https://visme-co.translate.goog/blog/website-color-schemes/?_x_tr_sl=en&_x_tr_tl=pl&_x_tr_hl=pl&_x_tr_pto=op,sc) - for design inspiration

&nbsp;

## :envelope_with_arrow: Author

This project was made by **Camila Montes Celinski**.

Feel free to contact me:
- [LinkedIn](https://br.linkedin.com/in/camila-montes-celinski-5a406942)
- [GitHub](https://github.com/camicelinski)