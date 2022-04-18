const res = require("express/lib/response");

module.exports={
    register : (req,res)=> res.render ("register"),
    login : (req,res)=> res.render ("login")
}