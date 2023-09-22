import express from 'express';
const app = express()
app.use(express.json())
let rooms = []
let currentId = 0
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.post('/rooms', (request, response) => {
    const room = {...request.body, id: currentId++, available: true}
    rooms.push(room)
    response.json(room)
})

app.get('/rooms', (request, response) => {
    const query = request.query
    console.log(query)
    if (query.from && query.to && isValidDate(query.from) && isValidDate(query.to)){
        const result = {
            data : rooms.filter(room => room.available)
        }
        response.json(result)
    }
    return response.status(400).json({ 
        message: "Invalid date format" 
      })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }