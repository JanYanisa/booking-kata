# Booking Kata

## What 

Build API for these stories

- As an admin I want to create a room [POST /rooms]
- As a user I want to see a list of all available rooms [GET /rooms{?from,to}]
- As a user I want to book a room [POST /rooms/{id}/books]

Simple scenario 

- Create a room
- View available rooms
- Book a room
- The booked room shouldn't be displayed on the available list (SIMPLE!)

## Install

```sh
npm i
```

## Run test 

```sh
npm run test:integration
```

## Open API Spec

```sh
npm run start:docs

# then, open http://localhost:3001
```

## Schemas 

### Room

```json
{
  "id": 1,
  "name": "Room 1",
  "description": "Room 1 description",
  "capacity": 2,
  "price": 100,
  "available": true
}
```

### Booking 

```json
{
  "from": "2023-10-16",
  "to": "2023-10-18",
  "booker": {
    "name": "John Doe",
    "email": "john@doe.lol",
    "phone": "123456789"
  },
  "guest": {
    "adults": 2,
    "children": 0
  }
}
```

### Response for Success 

```json
{
  "data": ...
}
```

### Response for Failure

```json
{
  "message": ...
}
```
