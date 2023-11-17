function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

function showFeedback() {
    var userAnswer = document.getElementById('userAnswer').value;
    var feedbackMessage = document.getElementById('feedbackMessage');
  
    switch (userAnswer) {
      case 'yes':
        feedbackMessage.textContent = 'Great! Let’s move forward';
        break;
      case 'no':
        feedbackMessage.textContent = 'Sorry, Let’s check something else';
        break;
      case 'idk':
        feedbackMessage.textContent = '0_0';
        break;
      default:
        feedbackMessage.textContent = 'Invalid answer';
    }
  }
  