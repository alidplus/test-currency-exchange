# Currency Exchange

Thank you very much for participating in our selection process. This project aims to understand how you work and what is your line of reasoning for some items that we work on daily, such as integrations with APIs, creation of components, and system architecture.

## The Project



### Backend



https://exchangeratesapi.io/
https://fixer.io/

### Frontend

![alt text](exchange.png "Exchange page mockup")

Create a page with the following requirements:

- Select box to select the origin currency, listing the availble currencies
- Select box to select the destination currency,


## API Mock

This API is a mock that can be used to create the exchange page by the `Frontend`, and it's what must to be replicated for the `Backend` position. All responses are fixed (the exchange will only return the example).

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
