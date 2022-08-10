import { connect } from "mongoose";

connect('mongodb://localhost:27017/fantasy-api').then(()=>{
  console.log('connectd scuesss')
})