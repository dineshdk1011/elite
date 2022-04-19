const router = require("express").Router
const models = require ('../models');
const User = models.User

const viewfree = ("/user", async(req,res) => {
   
    console.log(data)
   getallfunctiondata = async () => {
   
   }
})


const view = async (req, res) => {

    var data = req.params.id
    console.log(data)
    
    if(!req.body){
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

 var userlog =  await User.findAll({ where : {userid : data} }).then((data) => { return data})
 
   var direct = {
     name: userlog[0].firstname,
     refferal: userlog[0].refferal,
     directrefferal: userlog[0].directrefferal
   }

   var refferalzero = await User.findAll({ where : {refferal : direct.directrefferal}}).then((data) => { return data})
   var directzero = {
     name:refferalzero[0].firstname,
    
   }
  //  console.log(direct)
 var refferallone = await User.findAll({ where : { directrefferal: direct.refferal} }).then((data) => { return data})
    var levelone =[]
    for(i=0; i< refferallone.length; i++){
      levelone.push(
        {
       name : refferallone[i].firstname,
       refferal: refferallone[i].refferal,
       refferedBy: direct.refferal
      })
      
  }
// console.log(levelone)

  var leveltwo = []
  for(i=0; i<levelone.length; i++){
   var refferalltwo = await User.findAll({ where : { directrefferal: levelone[i].refferal} }).then((data) => { return data})
   if(refferalltwo.length != 0){
   leveltwo.push({
      name: refferalltwo[0].dataValues.firstname,
      refferal: refferalltwo[0].dataValues.refferal,
      refferedBy: levelone[i].refferal
    
    })
  }
    // console.log(leveltwo)
  }
 

  for(i=0; i<leveltwo.length; i++){
    var levelthree = []
      var refferallthree = await User.findAll({ where : { directrefferal: leveltwo[i].refferal} }).then((data) => { return data})
      if(refferallthree.length != 0){
      levelthree.push(   {
        name : refferallthree[0].firstname,
        refferal: refferallthree[0].refferal,
        refferedBy: leveltwo[i].refferal
      })
    }
      // console.log(levelthree)
  }

  var levelfour =[]
  for(i=0; i<levelthree.length; i++){
      var refferallfour = await User.findAll({ where : { directrefferal: levelthree[i].refferal} }).then((data) => { return data})
      if(refferallfour != 0){
       levelfour.push ({
        name : refferallfour[0].firstname,
        refferal: refferallfour[0].refferal,
        refferedBy: levelthree[i].refferal
      })
    }
  }
    // console.log(levelfour)
    
 var finalarray = []
 finalarray.push({
  directzero : directzero,
   direct : direct,
   levelone: levelone,
   leveltwo : leveltwo,
   levelthree : levelthree,
   levelfour : levelfour
 }
 )
 res.send(finalarray)
   
   console.log(direct) 
}


module.exports = {
    view
}