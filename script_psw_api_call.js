function check_psw_func() {   
   const app = document.getElementById('root')

   const password_input = document.getElementById("password").value
   const complexity_input = document.getElementById("select_complexity").value;

   const logo = document.createElement('img')
   logo.src = 'logo.png'

   const container = document.createElement('div')
   container.setAttribute('class', 'container')

   app.appendChild(logo)
   app.appendChild(container)

   var request = new XMLHttpRequest()
   var api_address = 'https://password-checking-33347.herokuapp.com/cmpl_input/psw_input'
   api_address = api_address.replace("psw_input",password_input)
   api_address = api_address.replace("cmpl_input",complexity_input)
   request.open('GET', api_address, true)
   request.onload = function() {
   // Begin accessing JSON data here
   var data = JSON.parse(this.response)
   if (request.status >= 200 && request.status < 400) {
      data.message
      
      forEach(movie => {
         const card = document.createElement('div')
         card.setAttribute('class', 'card')

         const h1 = document.createElement('h1')
         h1.textContent = movie.title

         const p = document.createElement('p')
         movie.description = movie.description.substring(0, 300)
         p.textContent = `${movie.description}...`

         container.appendChild(card)
         card.appendChild(h1)
         card.appendChild(p)
      })
   } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
   }
   }

   request.send()
}