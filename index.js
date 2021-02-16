const express = require('express')
const app = express()
const port = 5000

const monggose = require('mongoose')
monggose.connect('mongodb+srv://hwang:hwang1234@cluster0.rtuca.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...!!!'))
    .catch(err => console.log(err + "에러남"))

app.get('/', (req, res) => {
  res.send('Hello World!~~ 서버 전송 완료')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})