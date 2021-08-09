/** 
 * @author	jwonkim@mcnc.co.kr
 * @name	메인 화면 
 * @since	2019.10.28
 * @desc    메인화면 
 */

 new Promise(function(resolve, reject){
   
    var input = Math.floor(Math.random()*10);

      if(input > 4){ 
        resolve(input)
      }
    reject(new Error("에러당ㅇㅇ"));
  })
  .then(function(result) {
    console.log(result); // 1
    return result + 10;
  })
  .then(function(result) {
    console.log(result); // 31
  }).then().catch(function (err) {
    console.log(err); // Error: Request is failed
  });