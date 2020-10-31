const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  let newArr = arr.slice(0);
  if(!Array.isArray(arr))
  {
    throw new Error();
  }

 

    for (let i = 0; i < arr.length; i++) 
  {
    switch(arr[i])
    {
   case '--discard-next':
   
     
     newArr[i] = undefined;
     if(i+1<newArr.length){
     newArr[i+1]=undefined;
     
   }
   break;
   case '--discard-prev':
   
     newArr[i] = undefined;
     if(i-1>0){
    newArr[i-1]=undefined;
     }
   break;
  case'--double-next':
   
    if(i+1<newArr.length){
    newArr[i] = newArr[i+1];
    }
    else {newArr[i]=undefined};
    
   break;
 case '--double-prev':
   
    if(i-1 > 0){
    newArr[i] = newArr[i-1];
    }
    else {newArr[i]=undefined};
  break;
  } 
 }

//  newArr = newArr.filter((e)=>e!=undefined);
//  return newArr;
for(let i = 0; i <newArr.length; i++)
{
  if(newArr[i]===undefined)
  {
    newArr.splice(i,1);
  i--;
  }
  
}
return newArr;

  


};
