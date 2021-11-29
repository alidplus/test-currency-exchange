# Currency Exchange

Thank you very much for joining our selection process. This project aims to understand how you work and what is your line of reasoning for some items that we work on daily such as integrations with APIs, creation of components, and system architecture.

## The Project

In this project, we would like to make a small system for currencies exchange. You will be choosing 3 or 4 different currencies to work with on this system. For the backend side, we would like you to implement two endpoints: one where you can obtain the available currencies for the system and the other one for calculating the exchange. For the frontend side, we would like you to build a simple interface where the user can choose between the available currencies on the system and calculate the exchanged values. You can see more details on each section below

This test is going to be applied for both backend and frontend roles. If you are a full-stack candidate, feel free to do both and impress us even more.

### Backend

- Create get currencies endpoint:

       Create a GET endpoint that returns the available currencies to make the exchange 
       on the system (you can choose 3 or 4 currencies to list here).

- Create the exchange endpoint

        Calculate the exchange for the selected currency and return the calculated amount.

#### Resources

We want you to use external APIs for grabbing the current quotation for each currency you are working within your project. You can use the following providers to integrate with your API:

- https://exchangeratesapi.io/
- https://fixer.io/

Please add instructions about adding external integrations keys and configurations to your project.

### Frontend

![alt text](exchange.png "Exchange page mockup")

Create a page with the following requirements:

- Select box to select the origin currency, listing the available currencies;
- Select box to select the destination currency;
- When clicking on the conversion button, we would like to see the exchanged amount.


## API Mock

This API is a mock that can be used to create the exchange page by the `Frontend`. Also, it's what must be replicated for the `Backend` side. All responses are static for the mock.

```
Endpoint:
https://61a0fad86c3b400017e69b41.mockapi.io/
```

```
GET /currencies

[
    {"name":"Euro","symbol":"EUR"},
    {"name":"Dollar","symbol":"USD"},
    {"name":"Pound sterling","symbol":"GPB"},
    {"name":"Canadian Dollar","symbol":"CAD"}
]
```

```
POST /exchange
request:
{
    "from": "USD",
    "to": "EUR",
    "amount": 1.05
}

response:
{
    "from": "USD",
    "to": "EUR",
    "amount": 1.05,
    "amount_exchanged": 0.93
}
```
