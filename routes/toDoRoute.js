const express=require("express")
const router=express.Router()
const {setToDo,getToDos,updateToDo,deleteToDo}=require("../controllers/toToController")

//routes
router.get('/',getToDos)
router.post('/',setToDo)
router.put('/:id',updateToDo)
router.delete('/:id',deleteToDo)

module.exports=router