// validation form fields

//validate name
document.getElementById('name').addEventListener('blur', validateName)

//validate Post code
document.getElementById('postcode').addEventListener('blur', validatePostCode)

//validate email
document.getElementById('email').addEventListener('blur', validateEmail)

//validate Phone Number
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
  const name = document.getElementById('name')
  const nameRegEx = /^[a-zA-Z]{2,10}$/i

  if (!nameRegEx.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
    name.classList.add('is-valid')
  }
}

function validatePostCode() {
  const postcode = document.getElementById('postcode')
  const postcodeRegEX = /^[a-zA-Z]{1,2}[0-9]{1,2}(\s?[0-9][a-zA-Z]{2}$)/i

  if (!postcodeRegEX.test(postcode.value)) {
    postcode.classList.add('is-invalid')
  } else {
    postcode.classList.remove('is-invalid')
    postcode.classList.add('is-valid')
  }
}
function validateEmail() {
  const email = document.getElementById('email')
  const emailRegEx =
    /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]){2,5}/i

  if (!emailRegEx.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }
}
function validatePhone() {
  const phone = document.getElementById('phone')
  const phoneRegEx = /^0{1}\d{3}\-?\d{3}\-?\d{2}\-?\d{2}$/

  if (!phoneRegEx.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    phone.classList.remove('is-invalid')
    phone.classList.add('is-valid')
  }
}


export default 