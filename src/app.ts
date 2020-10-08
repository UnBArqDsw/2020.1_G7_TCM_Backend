import express from 'express'

const app = express()

app.listen('3333', () => {
  console.log('App Started on port 3333')
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello Horld' })
})
