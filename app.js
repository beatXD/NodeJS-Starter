import express from 'express'

const app = express()

app.use('/', (req, res) => {
  return res.status(200).send('Hello World !!')
})

export default app
