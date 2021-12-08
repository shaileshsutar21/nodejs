module.exports = {
 
  blockingtest : async function blockingtest() {
  // blockingtest : async function blockingtest() {
 var counter = 1;
  //for (i of Array(7).keys()) {
    //if(i === 4) {
     //setTimeout(() => {counter = 11;}, 15000);
     await this.sleep(10000);
     console.log("counter is", 11);
      return counter;    
    //}    
  // }
  console.log("for loop ends...")
  counter = 20;
  return counter;
 },
 sleep : function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


}