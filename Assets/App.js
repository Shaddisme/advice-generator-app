window.addEventListener("DOMContentLoaded", () => {
    const adviceNumber = document.querySelector("#advice-number");
    const advice = document.querySelector(".container-advice");
    const generateBtn = document.querySelector("#generate-advice-btn");
    const API_URL = (id) => `https://api.adviceslip.com/advice/${id}`;
    
    generateBtn.addEventListener('click', () => {
      getAdvice();
    });
    
    function getAdvice() {
      fetch(API_URL(Math.floor(Math.random()*224)+1))
        .then(res => res.json())
        .then(data => {
          const adviceObj = data.slip;
          
          adviceNumber.textContent = adviceObj.id;
          advice.textContent = `"${adviceObj.advice}"`;
        })
        .catch(err => console.log(err));
    }
  })