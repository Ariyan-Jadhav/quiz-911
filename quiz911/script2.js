document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    "1. On what date did the 9/11 attacks occur?",
    "2. Which two buildings were hit during the 9/11 attacks in New York City?",
    "3. How many planes were hijacked during the 9/11 attacks?",
    "4. Who was the U.S. President during the 9/11 attacks?",
    "5. What was the name of the terrorist group behind the 9/11 attacks?",
  ];
  const options = [
    {
      id: 1,
      option1: "July 4, 2001",
      option2: "September 11, 2001",
      option3: "October 31, 2001",
      option4: "November 9, 2001",
      ans: "September 11, 2001",
    },
    {
      id: 2,
      option1: "Empire State Building",
      option2: "Chrysler Building",
      option3: "Twin Towers (World Trade Center)",
      option4: "Statue of Liberty",
      ans: "Twin Towers (World Trade Center)",
    },
    { id: 3, option1: "2", option2: "3", option3: "4", option4: "5", ans: "4" },
    {
      id: 4,
      option1: "Bill Clinton",
      option2: "George W. Bush",
      option3: "Barack Obama",
      option4: "Donald Trump",
      ans: "George W. Bush",
    },
    {
      id: 5,
      option1: "Taliban",
      option2: "ISIS",
      option3: "Al-Qaeda",
      option4: "Hamas",
      ans: "Al-Qaeda",
    },
  ];

  let qsNo = -1;
  let currentqsNo = -1;
  let correctopt = 0;
  const strButt = document.getElementById("str-butt");
  const Info = document.getElementById("info");
  const selectQuestion = document.getElementById("select-question");
  const selectOption = document.getElementById("select-option");
  const liOpt = document.getElementById("li-opt");
  const pQus = document.getElementById("p-qus");

  function isResult() {
    if (correctopt == 0) {
      Info.textContent = `0/5 - "Bro you failed like it was on purpose."`;
    }
    if (correctopt == 1) {
      Info.textContent = `1/5 - "This quiz is about 9/11 but your score is the real tragedy."`;
    }
    if (correctopt == 2) {
      Info.textContent = `2/5 - "Your brain might’ve gone on Airplane Mode during the quiz."`;
    }
    if (correctopt == 3) {
      Info.textContent = `3/5 - "You’ve got potential, but let’s not put you in charge of airport security just yet."`;
    }
    if (correctopt == 4) {
      Info.textContent = `4/5 - "That's 80%. Or in your case, 100% disappointment."`;
    }
    if (correctopt == 5) {
      Info.textContent = `5/5 - "You didn't just pass... you made 9/11 feel like a group project you witnessed live."`;
    }
    strButt.classList.add("_hidden");
    liOpt.classList.add("_hidden");
    pQus.classList.add("_hidden");
    Info.classList.remove("_hidden");
  }

  function nextQuestion() {
    selectQuestion.textContent = `${questions[qsNo]}`;
    for (let i = 1; i < 5; i++) {
      let optionFill = document.getElementById(`option${i}`);
      optionFill.textContent = options[qsNo][`option${i}`];
    }
  }

  function createInterface() {}

  strButt.addEventListener("click", function () {
    qsNo++;
    Info.classList.add("_hidden");
    strButt.textContent = "Next";
    liOpt.classList.remove("_hidden");
    pQus.classList.remove("_hidden");
    if (qsNo < 4) {
      nextQuestion();
    } else if (qsNo == 4) {
      strButt.textContent = "Show Result";
      nextQuestion();
    } else if (qsNo == 5) {
      isResult();
    } else {
      return;
    }
  });

  liOpt.addEventListener(`click`, (e) => {
    if ((e.target.tagName = "LI")) {
      if (currentqsNo !== qsNo) {
        currentqsNo = qsNo;
        const optionNo = e.target.getAttribute("data-id");
        let colorChange = document.getElementById(optionNo);
        if (options[qsNo][`${optionNo}`] == options[qsNo].ans) {
          correctopt++;
          console.log(correctopt);
        }
      }
    }
  });
});
