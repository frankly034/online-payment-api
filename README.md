# Online Payment API

With the growth of the internet and innovations over time. It has become evident that payment for goods and services happening over the internet has become a norm.

This is a dockerized API built with Typescript and Express to illustrate how to integrate payment to an API. [See playlist](https://www.youtube.com/playlist?list=PLseH49SWn6vbVS_QQLkWdRrZFeLauLpzH)

## Table of Contents

- [Basic Payment Flow](#basic-payment-flow)
- [Features](#features)
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
- [Docker setup with app, postgres and pgadmin](https://youtu.be/lqZpNkNzuOc)
- [Sequelize setup](https://youtu.be/MGu7mKI-2_4) -[BaseAPI setup](https://youtu.be/5zxFtrRgkZs)
- [Paystack api integration](https://youtu.be/yvSERDjXmw0)
- [Router and controller setup](https://youtu.be/rzdv_hEJ0WQ)

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
- Docker

<!-- REQUIRED INSTALLATION -->

## REQUIRED INSTALLATIONS

- Node
- Docker desktop

<!-- INSTALLATION -->

## Installation of This Repository

Once you have installed the requiered packages shown on the [Required Installations](#required-installations), proceed with the following steps

`Ensure you have docker desktop installed and running`

Clone the Repository,

```Shell
your@pc:~$ git clone https://github.com/frankly034/online-payment-api.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd online-payment-api
```

Run with docker-compose

```Shell
your@pc:~$ docker-compose up
```

<!-- FUTURE IMPROVEMENTS -->

## Future Improvements

- Add api documentation
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
