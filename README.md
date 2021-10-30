# My Stocks Watcher App

## About

This mobile web application was developed as the Capstone Project for Microverse React-Redux Curriculum Module. It was built upon [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs/) and the original design idea was created by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio). My task was to check a list of metrics (data stock, in my case) making use of React and Redux. The application allows users to list the Stocks, ETFs, and Funds traded in AMEX, NYSE, and Nasdaq Stock Exchanges and filter their search.

Below, I present some screenshots of the app.

<p align="center">
<img style="border: 1px solid black;" src="./docs/Capture-1.PNG" width="700">
<img style="border: 1px solid black;" src="./docs/Capture-2.PNG" width="700">
</p>

## Built With

- HTML, CSS, JavaScript;
- ReactJS, Redux;
- Bootstrap, React Stockcharts;

## Live Demo

Live demo for this project can be found in this [link]().

## Getting Started

To run this app running locally,you'll need an API key that you can easily obtain by registering at [https://financialmodelingprep.com/register](https://financialmodelingprep.com/register). You only need a valid email account to register freely. Now, go to the API dashboard and get your newly created API key! Store this token with you, because you'll need it for the next steps:


1. In your terminal, in the folder of your preference, type the following bash command to clone this repository:

```sh
git clone git@github.com:MaiRizk/my-stocks-watcher-app.git
```

2. Now that you have already cloned the repo run the following commands to get the project up and running:
```sh
cd my-stocks-watcher-app
yarn
```

3. For the last step of the process, you just need to edit the file `APIKEY.js` in the folder `src/utils/`. Make sure to change the `APIKEY` variable to the one that you got previously from the API dashboard. Now, on your terminal, run:
```sh
yarn start
```

This should start your local server in [http://localhost:3000/](http://localhost:3000/). To stop it, hit `<CTRL> + C` on your keyboard.
## Run tests

To test the App's components and logic, please, run the following command:

```sh
yarn test --watchAll
```
Make sure you have properly provided an API key, as explained in the steps above. When the tests are finished, just hit `q` key to leave the watch mode for the tests.

## Author

👤 **MaiRizk**

- GitHub: [@MaiRizk](https://github.com/MaiRizk)
- Twitter: [@MaiRizk](https://twitter.com/MaiRizk16)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mai-rizk-252722188/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/MaiRizk/my-stocks-watcher-app/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.