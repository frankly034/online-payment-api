# Online Payment API

With the growth of the internet and innovations over time. It has become evident that payment for goods and services happening over the internet has become a norm.

This is a dockerized API built with Typescript and Express to illustrate how to integrate payment to an API. [See playlist](https://www.youtube.com/playlist?list=PLseH49SWn6vbVS_QQLkWdRrZFeLauLpzH)

## Table of Contents

- [Basic Payment Flow](#basic-payment-flow)
- [Features](#features)
- [Postman Documentation](#postman-documentation)
- [Concepts Employed](#concepts-employed)
- [Built With](#built-with)
- [Required Installations](#required-installations)
- [Instalation of This App](#instalation)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- basic payment flow -->

## Basic Payment Flow

Payment systems are built pretty much alike with almost the same flow.

- Generate a secure payment authorization link.
- Direct users to the generated link to authorize payment through card or bank payment authorization details.
- Verify payment using the payment reference from the previous step.
- Provide value for verified payment.

<!-- features -->

## Features

- [Express app setup with typescript](https://youtu.be/n2aiDxWKR7g)
- [Linting and code formatting](https://youtu.be/gv7etqSx-t8)
- [Error handling](https://youtu.be/ShhwWG0S-D8)
- [Sequelize setup](https://youtu.be/MGu7mKI-2_4) -[BaseAPI setup](https://youtu.be/5zxFtrRgkZs)
- [Paystack api integration](https://youtu.be/yvSERDjXmw0)
- [Router and controller setup](https://youtu.be/rzdv_hEJ0WQ)

<!-- postman documentation -->

## Postman Documentation

To explore the APIs see [documentation](https://documenter.getpostman.com/view/17383417/2s93RXtqr5)
<img width="1440" alt="Screenshot 2023-04-05 at 23 29 11" src="https://user-images.githubusercontent.com/31358867/230225854-6b22ab4c-f983-4454-9972-cc967573c50f.png">

<!-- concepts employed -->

## Concepts Employed

- Typescript - interfaces, generics and type definitions
- Express middlewares and controller
- Containerization - Docker
- 3rd party API integration

<!-- BUILT WITH -->

## Built With

- Express
- Postgres
- Sequelize

<!-- REQUIRED INSTALLATION -->

## REQUIRED INSTALLATIONS

- Node
- Postgres (hosted/cloud service)
<!-- INSTALLATION -->

## Installation of This Repository

Once you have installed the requiered packages shown on the [Required Installations](#required-installations), proceed with the following steps

Clone the Repository,

```Shell
your@pc:~$ git clone https://github.com/frankly034/online-payment-api.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd online-payment-api
```

Install dependencies with npm

```Shell
your@pc:~$ npm install
```

Run application with npm

```Shell
your@pc:~$ npm run dev
```

<!-- FUTURE IMPROVEMENTS -->

## Future Improvements

- Add tests
- Add data validation
- Add thank you email to donors

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- 🇳🇬 Lewis Ugege - franklynugege@gmail.com | [Github Account](https://github.com/frankly034) | [Twitter](https://twitter.com/@wizlulu) | [Linkedin](https://linkedin.com/in/lewis-ugege) |

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- <a href="https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate">Mohammad Faisal</a>
- <a href="https://paystack.com">Paystack</a>
