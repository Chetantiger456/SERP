
    function retrieveValue(){
        document.getElementById('username').value = localStorage.getItem('username')
        document.getElementById('password').value = localStorage.getItem('password')
    }

    function validate(event) {
        event.preventDefault()
       var resultUser = true
       var resultPassword = true
       var username = document.getElementById('username').value
       var password = document.getElementById('password').value
       console.log(username, password)
       localStorage.setItem('username', username)
       localStorage.setItem('password', password)
      
       if(username == '' || username.length == 0){
        document.getElementById("usererrormsg").textContent = 'username cannot be empty'
        resultUser = false
       }else{
        document.getElementById("usererrormsg").textContent = ''
        resultUser= true
       }
       if(password == '' || password.length == 0){
        document.getElementById("passworderrormsg").textContent = 'password cannot be empty'
        resultPassword = false
       }else{
           document.getElementById("passworderrormsg").textContent = ''
           resultPassword = true
       }
       if(resultUser && resultPassword){
            window.location.assign("./todo.html")
        }
    }
    