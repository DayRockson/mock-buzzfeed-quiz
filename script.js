const questionDisplay = document.getElementById("questions");
const answerDisplay = document.getElementById("answer");

const questions = [
    {
        id: 0,
        text: "Who was the first Disney princess?",
        answers: [
            {
                text: "Snow White",
                image: "images/snow-white2.jpg",
                alt: "Snow White singing to a bird"
            },
            {
                text: "Belle",
                image: "images/belle.jpeg",
                alt: "a gently smiling Belle"
            },
            {
                text: "Aurora",
                image: "images/aurora.jpg",
                alt: "Aurora singing in the forest"
            },
            {
                text: "Cinderella",
                image: "images/cinderella.jpg",
                alt: "a smiling Cinderella"
            }
        ]
    }, 

    {
        id: 1,
        text: "What is the name of the princess of Atlantis?",
        answers: [
            {
                text: "Kassiopeia",
                image: "",
                alt: ""
            },
            {
                text: "Kalpana",
                image: "",
                alt: ""
            },
            {
                text: "Kidagakash",
                image: "",
                alt: ""
            },
            {
                text: "Katniss",
                image: "",
                alt: ""
            }
        ]
    },

    {
        id: 2,
        text: "Who is the youngest Disney princess?",
        answers: [
            {
                text: "Jasmine",
                image: "images/jasmine.jpg",
                alt: "Jasmine nuzzling a bird"
            },
            {
                text: "Snow White",
                image: "images/snow-white1.jpg",
                alt: "a portrait of Snow White"
            },
            {
                text: "Ariel",
                image: "images/ariel.jpg",
                alt: "a smiling Ariel"
            },
            {
                text: "Anna",
                image: "images/anna.jpg",
                alt: "a portrait of Anna"
            }
        ]
    },

    {
        id: 3,
        text: "Which fierce feline was Jasmine's sidekick?",
        answers: [
            {
                text: "Bobcat",
                image: "",
                alt: ""
            },
            {
                text: "Tiger",
                image: "",
                alt: ""
            },
            {
                text: "Leopard",
                image: "",
                alt: ""
            },
            {
                text: "Cheetah",
                image: "",
                alt: ""
            }
        ]
    },

    {
        id: 4,
        text: "In Brave, what is Merida's primary weapon?",
        answers: [
            {
                text: "Spear",
                image: "",
                alt: ""
            },
            {
                text: "Sword",
                image: "",
                alt: ""
            },
            {
                text: "Axe",
                image: "",
                alt: ""
            },
            {
                text: "Bow",
                image: "",
                alt: ""
            }
        ]
    },

    {
        id: 5,
        text: "Which movie's 'princess' is not a technical princess",
        answers: [
            {
                text: "Atlantis",
                image: "images/kida.jpg",
                alt: "Kida throwing a peace sign"
            },
            {
                text: "Mulan",
                image: "images/mulan1.jpg",
                alt: "a psmiling Mulan"
            },
            {
                text: "Pocahontas",
                image: "images/pocahontas1.jpg",
                alt: "a smiling Pocahontas"
            },
            {
                text: "Brave",
                image: "images/merida1.jpg",
                alt: ""
            }
        ]
    },

    {
        id: 6,
        text: "Which kingdom is Elsa and Anna's home?",
        answers: [
            {
                text: "Arandale",
                image: "",
                alt: ""
            },
            {
                text: "Arendelle",
                image: "",
                alt: ""
            },
            {
                text: "Arendale",
                image: "",
                alt: ""
            },
            {
                text: "Arandelle",
                image: "",
                alt: ""
            }
        ]
    },

    {
        id: 7,
        text: "Which princess is the most handy with a sword?",
        answers: [
            {
                text: "Merida",
                image: "images/merida2.jpg",
                alt: ""
            },
            {
                text: "Mulan",
                image: "images/mulan2.jpg",
                alt: ""
            },
            {
                text: "Pocahontas",
                image: "images/pocahontas2.jpg",
                alt: ""
            },
            {
                text: "Megara",
                image: "images/megara.jpg",
                alt: ""
            }
        ]
    },

    {
        id: 8,
        text: "What are the sleeping beauty's two names?",
        answers: [
            {
                text: "Briar Rose / Aurora",
                image: "",
                alt: ""
            },
            {
                text: "Briar Rose / Belle",
                image: "",
                alt: ""
            },
            {
                text: "Aurora / Belle",
                image: "",
                alt: ""
            },
            {
                text: "Belle / Flora",
                image: "",
                alt: ""
            }
        ]
    },

    {
        id: 9,
        text: "What is the name of Rapunzel's chameleon friend?",
        answers: [
            {
                text: "Maximus",
                image: "",
                alt: ""
            },
            {
                text: "Rajah",
                image: "",
                alt: ""
            },
            {
                text: "Ralph",
                image: "",
                alt: ""
            },
            {
                text: "Pascal",
                image: "",
                alt: ""
            }
        ]
    }
]

//final answer display options
const answers = [
    {
        id: [0],
        text: "Excellent! Looks like we are in the midst of a master!",
        image: "images/final1.jpg",
        alt: "Ariel looking excited",
    },
    {
        id: [1],
        text: "Good! You sure know your stuff!",
        image: "images/final2.jpg",
        alt: "Rapunzel looking pleased",
    },
    {
        id: [2],
        text: "Sigh. You need a disney princess marathon ASAP!",
        image: "images/final3.jpg",
        alt: "Aurora lying across a bed in despair",
    }
];

const unansweredQuestions = [];
const chosenAnswers = [];
//array of correct answers
const correctAnswers = [
    "Snow White", "Kidagakash", "Snow White", "Tiger", "Bow", "Mulan",
    "Arendelle", "Mulan", "Briar Rose / Aurora", "Pascal"
];

//add questions to html
const populateQuestions = () => {
    questions.forEach( question => {
        const titleBlock = document.createElement("div");
        titleBlock.id = question.id;
        titleBlock.classList.add("title-block");
        const titleHeading = document.createElement("h2");
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);

        questionDisplay.append(titleBlock);

        const answersBlock = document.createElement("div");
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add("answer-options");

        unansweredQuestions.push(question.id);

        question.answers.forEach(answer => {
            const answerBlock = document.createElement("div");
            answerBlock.classList.add("answer-block");
            answerBlock.addEventListener("click", () => handleClick(question.id, answer.text));
            
            const answerImage = document.createElement("img");
            answerImage.setAttribute("src", answer.image);
            answerImage.setAttribute("alt", answer.alt);
            answerImage.classList.add("answer-img");
            
            const answerTitle = document.createElement("h3");
            answerTitle.textContent = answer.text;
            answerTitle.classList.add("answer-title");

            if (answer.image=="" && answer.alt=="") {
               answerImage.classList.add("toggle-img");
               answerBlock.classList.add("toggle-block");
            } 

            answerBlock.append(answerImage, answerTitle);
            answersBlock.append(answerBlock);
        })

        questionDisplay.append(answersBlock);
        
    });
 
}

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId)) 
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unansweredQuestions.indexOf(questionId);

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1);
    }

    console.log(chosenAnswers);
    console.log(unansweredQuestions);

    disableQuestionBlock(questionId, chosenAnswer);
    //scroll to lowest unanswered question
    const lowestQuestionId = Math.min(...unansweredQuestions);
    location.href = "#" + lowestQuestionId;    

    if(!unansweredQuestions.length) {
        location.href = "#answer"
        showAnswer();
    }       
}

//show final result
const showAnswer = () => {
    const countMatches = (chosenAnswers, correctAnswers) => {
      // Initialize a counter to count the matches
      let correctCount = 0;

      // Loop through the arrays and compare corresponding elements
      for (let i = 0; i < chosenAnswers.length; i++) {
          if (chosenAnswers[i] === correctAnswers[i]) {
             correctCount++;
            }   
       }
       // Return the total number of matches
       return correctCount;
    }

    //match results to answers
    const finalCount = countMatches(chosenAnswers, correctAnswers);
    let result 
    if (finalCount == "10") {
        result = answers[0];
    } else if (finalCount <= "9" && finalCount > 5) {
        result = answers[1];
    } else if (finalCount <= "5") {
        result = answers[2];
    }
    
    const answerBlock = document.createElement("div");
    answerBlock.classList.add("result-block"); 
    const answerTitle = document.createElement("h3");
    answerTitle.textContent = result.text;
    const answerImage = document.createElement("img");
    answerImage.setAttribute("src", result.image);
    answerImage.setAttribute("alt", result.alt);
    answerImage.classList.add("final-answer");
    answerTitle.classList.add("final-title");
     
    answerBlock.append(answerTitle, answerImage);
    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll(".answer-block");
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)));
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions");

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !==chosenAnswer) {
            block.style.opacity = "40%";
        }
    })
}
    
