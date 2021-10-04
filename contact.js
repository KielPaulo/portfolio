

const contactForm =  document.querySelector('.contact-form');

let name = document.querySelector('#contact-name');
let email = document.querySelector('#contact-email');
let contactNo = document.querySelector('#contact-phone');
let message = document.querySelector('#contact-message');




contactForm.addEventListener('submit', (e)=>{
	e.preventDefault();


	let formData ={

		name: name.value,
		email:email.value,
		contactNo: contactNo.value,
		message: message.value

	}

	fetch('https://immense-shore-64525.herokuapp.com/api/users/contact',{

		method: "POST",
		headers: {

			"Content-Type": "application/json"
		},
		body:JSON.stringify({

			formData: formData
		})
	})




	
})

