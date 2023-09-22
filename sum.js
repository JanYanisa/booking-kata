const sum = (a, b) => a + b;

const express = require('express');
const app = express();

app.use(express.json()); // Add this line to parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/rooms', (req, res) => {
  const { id, name, description, capacity, price, available, dateStart, dateEnd } = req.body;
  // Do something with the request body data, such as saving it to a database
  res.send(`New room created with ID ${id}`);
});
app.get('/rooms', (req, res) => {
    // TODO: Get all rooms from the database
    // ...
    const rooms = [
      {
        id: 1,
        name: "Room 1",
        description: "Room 1 description",
        capacity: 2,
        price: 100,
        available: true
      },
      {
        id: 2,
        name: "Room 2",
        description: "Room 2 description",
        capacity: 4,
        price: 200,
        available: false
      }
    ];
    res.send(rooms);
  });

  app.get('/rooms', (req, res) => {
    const { from, to } = req.query;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (from && to) {
      if (!dateRegex.test(from) || !dateRegex.test(to)) {
        return res.status(400).send('Invalid date format');
      }
      return res.send(`Rooms available from ${from} to ${to}`);
    }
  
    if (req.url.includes('?')) {
      return res.status(400).send('Bad Request: Query strings are not allowed');
    }
  
    return res.send('Rooms available for all dates');
  });

app.post('/rooms/:id/books', (req, res) => {
    const { id } = req.params;
    const { from, to, booker, guest } = req.body;
  
    // TODO: Get the room with the given id
    // ...
  
    // TODO: Check if the room is available for the given dates
    // ...
  
    // TODO: If it is available, book it
    // ...
  
    res.json(room);
  });

app.listen(3000, () => console.log('Server started on port 3000'));