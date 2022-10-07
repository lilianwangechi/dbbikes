# Dopaminaries

Welcome to **Dopaminaries **, motorcycle website:

## Setup

After forking the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8002`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:8002/bikes](http://localhost:8002/bikes) in
the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8002`



## Deliverables

As a user, I should be able to:

- See profiles of all bikes rendered in `Bikes page`.
- Add an individual bike to my collection by clicking on it. 



#### GET /bikes

Example Response:

```json
[
   {
      "id": 101,
      "name": "Honda-Monkey",
      "health": 94,
      "damage": 20,
      "armor": 63,
      "bot_class": "Support",
      "catchphrase": "beginner",
      "avatar_url": "https://pngimg.com/uploads/motorcycle/small/motorcycle_PNG3165.png",
      "created_at": "2018-10-02T19:55:10.800Z",
      "updated_at": "2018-10-02T19:55:10.800Z"
    },
    {
      "id": 102,
      "name": "BMW-66",
      "health": 86,
      "damage": 36,
      "armor": 77,
      "bot_class": "Medic",
      "catchphrase": "beginner",
      "avatar_url": "https://pngimg.com/uploads/motorcycle/small/motorcycle_PNG3140.png",
      "created_at": "2018-10-02T19:55:10.827Z",
      "updated_at": "2018-10-02T19:55:10.827Z"
    },
]
```





