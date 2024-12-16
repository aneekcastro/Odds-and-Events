// TODO: this file! :)
document.addEventListener("DOMContentLoaded", () => {
    
    const numberBankOutput = document.querySelector("#numberBank output");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
    const numberInput = document.querySelector("#number");
    const form = document.querySelector("form");
    const sortOneButton = document.querySelector("#sortOne");
    const sortAllButton = document.querySelector("#sortAll");
  
    const numberBank = [];
    const odds = [];
    const evens = [];
  
    function updateNumberBankDisplay() {
      numberBankOutput.textContent = numberBank.join(", ");
    }
  
    function updateSortedDisplay() {
      oddsOutput.textContent = odds.join(", ");
      evensOutput.textContent = evens.join(", ");
    }
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const number = parseInt(numberInput.value, 10);
      if (!isNaN(number)) {
        numberBank.push(number); 
        numberInput.value = '';  
        updateNumberBankDisplay();  
        updateSortedDisplay();  
      } else {
        alert("Please enter a valid number.");
      }
    });

    sortOneButton.addEventListener("click", () => {
      if (numberBank.length === 0) {
        alert("No numbers to sort.");
        return;
      }
  
      const numberToSort = numberBank.shift(); 
      if (numberToSort % 2 === 0) {
        evens.push(numberToSort); 
      } else {
        odds.push(numberToSort); 
      }
  
      updateNumberBankDisplay();
      updateSortedDisplay();
    });
  
    sortAllButton.addEventListener("click", () => {
      if (numberBank.length === 0) {
        alert("No numbers to sort.");
        return;
      }

      numberBank.forEach((number) => {
        if (number % 2 === 0) {
          evens.push(number); 
        } else {
          odds.push(number); 
        }
      });
  
      numberBank.length = 0;
  
      updateNumberBankDisplay();
      updateSortedDisplay();
    });
  });
  