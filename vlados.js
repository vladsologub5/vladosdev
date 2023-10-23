const express = require('express')
router = express.Router
port = 3000

let arr = ['GET method', 'POST method', 'PATCH method', 'DELETE method']

router.get('/', (req, res) => {
    arr.forEach(function(arr)  {
        res.send(arr)
    })
})

router.post('/', (req, res) => {
    const { name } = req.body
    arr.push(name)
})

router.patch('/', (req, res) => {
    const { name } = req.body
    arr.unshift(name)
})

router.delete('/', (req, res) => {
    const { name } = req.body
    arr.splice(name)
})

module.exports = router;
app.listen(3000)