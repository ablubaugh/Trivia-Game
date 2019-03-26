$(document).ready(function () {

    //Game Timer 
    var countDown = 30;
    var quizTimer = setInterval(function () {
      countDown--;
      document.getElementById('timer').textContent = countDown;
      if (countDown <= 0)
        clearInterval(quizTimer);
    }, 1000)
  
    
    
  
    setTimeout(timeUp, 1000 * 30);
    function timeUp() {
      $('body').css('background-image', 'url(./assets/img/pyramids1.jpg)');
      $('.scoreboard').css('font-size', '2em').css('color', '#FF0000');
      $('.quiz').css('visibility', 'hidden');
      
    }
  });
  
  //Quiz
  (function () {
    function newQuiz() {
      var output = [];
  
      quizQs.forEach((newQs, qNum) => {
        var answers = []
  
        for (ansLetter in newQs.answers) {
          answers.push(
            `<label>
                <input type='radio' name='question${qNum}' value='${ansLetter}'>
                ${ansLetter} :
                ${newQs.answers[ansLetter]}
               </label>`
          );
        }
  
        //Push question and answers to answers array
        output.push(
          `<div class='question'> ${newQs.question} </div>
          <div class='answers'> ${answers.join('')} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join('');
    }
  
    //Track answers
    function showResults() {
      var answerArrays = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      //Get users answers
      quizQs.forEach((newQs, qNum) => {
        var answerArray = answerArrays[qNum];
        var selector = `input[name=question${qNum}]:checked`;
        var userAnswer = (answerArray.querySelector(selector) || {}).value;
  
        if (userAnswer === newQs.correctAnswer) {
          numCorrect++;
  
          
          answerArrays[qNum].style.color = 'green';
        } else {
          answerArrays[qNum].style.color = 'red';
        }
      });
  
      //Display score
      resultsArray.innerHTML = `${numCorrect} out of ${quizQs.length}`;
    }
  
    //Write to Scoreboard
    var quizContainer = document.getElementById('quiz');
    var resultsArray = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    // Start Quiz
    var quizQs = [
      {
        question: 'In S1E3 "Health Care": Which of these is NOT one of Jim and Pam made up diseases?',
        answers: {
          a: 'Killer nanorobots',
          b: 'Hot dog fingers',
          c: 'Spontaneous dental hydroplosion',
          d: 'Hair cancer',
        },
        correctAnswer: 'd'
      },
      {
        question: 'In S2E10 "Christmas Party": Who ends up with the Video iPod at the end of the episode?',
        answers: {
          a: 'Dwight',
          b: 'Pam',
          c: 'Ryan',
          d: 'Michael',
        },
        correctAnswer: 'a'
      },
      {
        question: 'In S2E22 "Casino Night" Who has two dates?',
        answers: {
          a: 'Michael',
          b: 'Jim',
          c: 'Pam',
          d: 'Creed',
        },
        correctAnswer: 'a'
      },
      {
        question: 'In S3E9 "The Convict": Which of these things does Prison Mike NOT claim to have been busted for?',
        answers: {
          a: 'I stole',
          b: 'I robbed',
          c: 'I killed Dumbledore',
          d: "I kidnapped the President's Son",
        },
        correctAnswer: 'c'
      },
      {
        question: "In S3E21 'Women's Appreciation' Who gets flashed in the parking lot?",
        answers: {
          a: 'Meredith',
          b: 'Pam',
          c: 'Phyllis',
          d: 'Creed',
        },
        correctAnswer: 'c'
      },
      {
        question: 'In S5E20 "Dream Team" Michael Scott Paper Company meets with an investor.  Who is it?',
        answers: {
          a: "Pam's Mom",
          b: "Michael's Grandma",
          c: "David Wallace",
          d: "Dwight",
        },
        correctAnswer: 'b'
      }
    ];
  
    
    newQuiz();
  
    
    submitButton.addEventListener('click', showResults);
    
    
  })();