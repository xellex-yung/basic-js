const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
 
 getLength() {
   return this.arr.length;
 },
 addLink(value) {
    
     if(value !== undefined){this.arr.push(`( ${value} )`);
   } else {this.arr.push(`( )`);}
      return this;
  
 },
 removeLink(position) {
   if(!(Number.isInteger(position)) || position > this.count ||  position =='undefined' ){
     this.arr = [];
     throw new Error(); 
   } else  {
     this.arr.splice(position-1, 1);
   }
   return this;
  
 },
 reverseChain() {
   this.arr = this.arr.reverse();
   return this;
 },
 finishChain() {
   let res = this.arr.join('~~');
   this.arr = [];

   return res;
 }

};

module.exports = chainMaker;
