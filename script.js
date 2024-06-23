document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("mC6GMM4COU56Tm3-Z");
});

function previewMessage() {
  const yourName = document.getElementById('yourName').value;
  const friendName = document.getElementById('friendName').value;
  const yourEmail = document.getElementById('yourEmail').value;
  const friendEmail = document.getElementById('friendEmail').value;
  const message = document.getElementById('message').value;

  document.getElementById('previewYourName').value = yourName;
  document.getElementById('previewFriendName').value = friendName;
  document.getElementById('previewYourEmail').value = yourEmail;
  document.getElementById('previewFriendEmail').value = friendEmail;
  document.getElementById('previewMessage').value = message;

  document.getElementById('wishForm').style.display = 'none';
  document.getElementById('previewSection').style.display = 'block';
}

function editMessage() {
  document.getElementById('wishForm').style.display = 'block';
  document.getElementById('previewSection').style.display = 'none';
}

function sendMessage() {
  const templateParams = {
    yourName: document.getElementById('previewYourName').value,
    friendName: document.getElementById('previewFriendName').value,
    yourEmail: document.getElementById('previewYourEmail').value,
    friendEmail: document.getElementById('previewFriendEmail').value,
    message: document.getElementById('previewMessage').value
  };

  emailjs.send('service_fg0ucbc', 'template_rc3lv2o', templateParams)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your birthday wish has been sent!');
      document.getElementById('wishForm').reset();
      editMessage();
    }, error => {
      console.error('FAILED...', error);
      alert('Failed to send your birthday wish. Please try again.');
    });
}