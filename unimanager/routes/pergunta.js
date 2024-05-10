const express = require('express')
const app = express()
const client = require('../models/connection')
const {compileTrust} = require("express/lib/utils");

//get all
const getpergunta = (req,res)=>{
  client.query('select * from perguntas ',(error,results)=>{
    if(error)
    {
      throw error
    }
    res.status(200).json(results)
  })
}


module.exports = {
  getpergunta,


}