let arrayInput = document.getElementById('array-input');
let submitButton = document.getElementById('submit');
let result = document.getElementById('result');

      submitButton.addEventListener('click', () => {
        const userInput = arrayInput.value;
        const array = JSON.parse(userInput);
        const minMaxValues = findMinMax(array);
        resultElement.textContent = `Minimum Element: ${minMaxValues.min}\nMaximum Element: ${minMaxValues.max}`;
      });

      function findMinMax(array) {
        return {
          min: Math.min(...array),
          max: Math.max(...array)
        };
      }
submitButton.addEventListener('click', () => {
  let userInput = arrayInput.value;
  let array = JSON.parse(userInput);
  let minMaxValues = findMinMax(array);
  answer= `Minimum Element: ${minMaxValues.min}\nMaximum Element: ${minMaxValues.max}`;
});
result.innerHTML += "hello" + answer;

