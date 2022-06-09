const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (yangDihitung)=>{
  try{
    let hasil=0;
    let arr1=await promiseTheaterIXX();
    let arr2=await promiseTheaterVGC();
    let IXX=await arr1.filter(element=>element.hasil==yangDihitung);
    let VGC=await arr2.filter(element=>element.hasil==yangDihitung);    
    return IXX.length+VGC.length;
  }catch(err){
    return err;
  }
};
module.exports = {
  promiseOutput,
};
