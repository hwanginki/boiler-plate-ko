const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const monggose = require('mongoose')
monggose.connect('mongodb+srv://hwang:hwang1234@cluster0.rtuca.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...!!!'))
    .catch(err => console.log(err + "에러남"))

app.get('/', (req, res) => {
  res.send('Hello World!~~ 서버 전송 완료')
})

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어줌.
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
