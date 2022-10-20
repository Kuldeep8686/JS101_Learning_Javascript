//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let dbUser="abc@gmail.com"
let dbPwd="12345"

//login
let user="abc@gmail.com"
let pwd="12345"

if(dbUser===user && dbPwd===pwd){
  console.log("Log in successfull")
}else{
  console.log("Invalid credantials !!")
}