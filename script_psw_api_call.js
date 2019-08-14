function check_psw_func() {   

   const result_message = document.getElementById('password_result_message')
   const password_input = document.getElementById("password").value
   const complexity_input = document.getElementById("select_complexity").value;

   var request = new XMLHttpRequest()
   var api_address = 'https://password-checking-33347.herokuapp.com/todo/1'
   api_address = api_address.replace("psw_input",password_input)
   api_address = api_address.replace("cmpl_input",complexity_input)
   request.open('GET', api_address, true)
   request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
         
            const p = document.createElement('p')
            p.textContent = data.item
            result_message.appendChild(p)

      } else {
         const errorMessage = document.createElement('marquee')
         errorMessage.textContent = "The API is not working. Damn it!"
         result_message.appendChild(errorMessage)
      }
   }
   request.send()
}