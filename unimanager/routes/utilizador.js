const express = require('express')
const app = express()
const client = require('../models/connection')
const {compileTrust} = require("express/lib/utils");

//get all
const getutilizador = (req,res)=>{
  client.query('select * from utilizador ',(error,results)=>{
    if(error)
    {
      throw error
    }
    res.status(200).json(results)
  })
}

module.exports = {
  getutilizador,
  //getutilizadorbylog,
  //getlogin,
  //createutilizador,
  //userdelete,
  //updateuser,

}