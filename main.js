import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('hey its a get quest')
  res.send('hey its a get request!')
})

app.get('/password', (req, res) => {
    console.log('hey its a password get request')
  res.send('hey its a password  get request!')
})

app.put('/', (req, res) => {
    console.log('hey its a put  request')
  res.send('hey its a put request!')
})

app.delete('/', (req, res) => {
    console.log('hey its a delete  request')
  res.send('hey its a delete request!')
})

app.post('/', (req, res) => {
    console.log('hey its a post  request')
  res.send('hey its a post request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
