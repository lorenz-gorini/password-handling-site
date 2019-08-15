function check_psw_func() {   

   const result_message = document.getElementById('result')
   const prev_message = document.getElementById("res_message")
   if (prev_message) { prev_message.remove() }
   const password_input = document.getElementById("password").value
   const complexity_input = document.getElementById("select_complexity").value;

   var request = new XMLHttpRequest()
   const api_address = `https://password-checking-33347.herokuapp.com/password/${password_input}/${complexity_input}`
   request.open('GET', api_address, true)
   request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
         
            const p = document.createElement('p')
            p.id = "res_message"
            p.textContent = `The password is ${data.message}`
            result_message.appendChild(p)

      } else {
         const errorMessage = document.createElement('marquee')
         errorMessage.textContent = "The API is not working. Damn it!"
         result_message.appendChild(errorMessage)
      }
   }
   request.send()
}