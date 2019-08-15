function check_psw_func() {   

   const result_message = document.getElementById('password_result_message')
   const password_input = document.getElementById("password").value
   const complexity_input = document.getElementById("select_complexity").value;

   


   var request = new XMLHttpRequest()
   var api_address = `https://password-checking-33347.herokuapp.com/password/Lor3_/2`  // `https://password-checking-33347.herokuapp.com/${complexity_input}/${password_input}`
   request.open('GET', api_address, true)
   request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
         
            const p = document.createElement('p')
            p.textContent = data.message
            result_message.appendChild(p)

      } else {
         const errorMessage = document.createElement('marquee')
         errorMessage.textContent = "The API is not working. Damn it!"
         result_message.appendChild(errorMessage)
      }
   }
   request.send()
}

// SECOND OPTION to call the API after clicking the button using Fetch

const userAction = async () => {

   const result_message = document.getElementById('password_result_message')
   const password_input = document.getElementById("password").value
   const complexity_input = document.getElementById("select_complexity").value

   const api_address = `https://password-checking-33347.herokuapp.com/password/Lor3_/2`  //  ${password_input}/${complexity_input}`
   const response = await fetch(api_address);
   const myJson = await response.json(); //extract JSON from the http response
   const p = document.createElement('p')
   p.textContent = data.message
   result_message.appendChild(p)
}

// THIRD OPTION: fetch API

function check_psw_func_fetch() { 
   fetch("https://password-checking-33347.herokuapp.com/password/Lor3_/2").then(response => {
      if (response.ok) {
         console.log("Contenuto ricevuto");
      }
      if (response.status >= 100 && response.status < 200) {
         console.log("Informazioni per il client");
      }
      if (response.status >= 300 && response.status < 399) {
         console.log("Redirezione");
      }
      if (response.status >= 400 && response.status < 499) {
         console.log("Richiesta errata");
      }
      if (response.status >= 500 && response.status < 599) {
         console.log("Errore sul server");
      }
   }).catch(error => console.log("Si è verificato un errore!"))
}