const progressBar = document.getElementById('scroll-progress');

document.addEventListener('scroll', function () {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const scrollPercentage = (scrollValue / (documentHeight - windowHeight)) * 100;
  progressBar.value = scrollPercentage;
});


function checkSecretCode(code, file) {
  const secretCodeInput = document.getElementById('secret-code');
  const secretCode = secretCodeInput.value;

  if (secretCode === code) {
    window.open(file, '_blank');
  } else {
    alert('Code secret incorrect. Réessaie !');
  }
}
