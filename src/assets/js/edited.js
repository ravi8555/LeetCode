const isLoggedIn = true;

let isLog =function (){
  if (isLoggedIn == true) {
    const statusMessage = 'User is logged in.';
    this.sendToPa = function(){
      return statusMessage;
    }
  }
}

let result = new isLog();

console.log(result.sendToPa());

function chckvarLog(){
  const statusMessage = 'User is logged in.';
  return function(){
    console.log(statusMessage);
  }
}

let testLogIn = chckvarLog();
testLogIn();