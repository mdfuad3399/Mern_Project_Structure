const express = require("express")
const Router = express.Router()
const { Home } = require("../controllers/HelloController")



Router.get('/home', Home)












module.exports = Router