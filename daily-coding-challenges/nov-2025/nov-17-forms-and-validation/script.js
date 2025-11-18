document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(!email.match(/*look up regex code for match method*/)) {
    alert('Invalid email address!');
    return false;
  }
  if(password.length < 8) {
    alert('Password length must be more than 8 characters!');
    return false;
  }

  console.log('Success! Everything is valid.')
})