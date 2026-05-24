const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let users = []

app.get("/", (req, res) => {
    res.send("backend is working")
})

app.post("/signup", (req, res) => {

    const { username, email, password } = req.body

    const existingUser = users.find(
        (user) => user.email === email
    )
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const newUser = {
        username, email, password
    }

    users.push(newUser)
    console.log(users)
    res.status(201).json({
        message: "signup successfull"
    })
})

app.post("/login", (req, res) => {

    const { email, password } = req.body

    const existingUser = users.find(
        (user) => user.email === email
    )

    if (!existingUser) {

        return res.status(400).json({
            message: "User not found"
        })

    }

    if (existingUser.password !== password) {

        return res.status(400).json({
            message: "Incorrect password"
        })

    }

    res.status(200).json({
        message: "Login successful"
    })

})


app.listen(5000, () => {
    console.log("the server is running on port 5000")
})