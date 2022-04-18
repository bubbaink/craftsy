const res = require("express/lib/response");

module.exports={
    detail : (req,res)=> res.render ("productDetail"),
    cart : (req,res) =>  res.render ("productCart")
}