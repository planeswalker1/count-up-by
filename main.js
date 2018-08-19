// Count Up By
// Create a program that takes two numbers
// - one to count to and another to determine what multiple to use to get there.

// Here is some sample input:
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30

// Count to: 50
// Count by: 7
// Output: 7, 14, 21, 28, 35, 42, 49

// Don't forget to consider how to handle any input that might be submitted:

// empty values(user just presses enter)
// non - numeric values(It may be helpful to read up about the numerical value, NaN)
// negative numbers
// count by number is larger than the count to numbers

// loop to end with a start and step
// return an array of looped numbers
function generateCount(start, end, step) {
  let numbers = [];
  if (end <= start) {
    // if end === start
    if (end === start) {
      for (let i = start; i === end; i += step) {
        numbers.push(i);
      }
      // if end < start
    } else {
      for (let i = start; i >= end; i += step) {
        numbers.push(i);
      }
    }
    // if end > start
  } else {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  }

  return numbers;
}

// check for errors and prompt error
// add looped values to outputP
function stepToCount(count, step) {
  // check errors
  if (count === '' || step === '') {
    outputP.textContent = 'Please enter a value.';
    return;
  }

  let countNumber = Number(count);
  let stepNumber = Number(step);

  if (isNaN(countNumber) || isNaN(stepNumber) || stepNumber > countNumber && stepNumber >= 0 || stepNumber < countNumber && stepNumber <= 0 || stepNumber === countNumber && stepNumber === 0) {
    outputP.textContent = 'Please Enter valid values';
    return;
  }

  // loop count and add values to outputP
  let numbers = generateCount(stepNumber, countNumber, stepNumber);
  outputP.textContent = 'Output: ';
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      if ((i + 1) === numbers.length) {
        outputP.textContent += numbers[i];
      } else {
        outputP.textContent += numbers[i] + ', ';
      }
    }
  }
}

const inputs = Array.from(document.querySelectorAll('input'));
const count = document.querySelector('#count');
const step = document.querySelector('#step');
const form = document.querySelector('form');
const outputP = document.querySelector('.hidden');

// on form submit show outputP with looped values
form.addEventListener('submit', function (event) {
  event.preventDefault();
  outputP.textContent = '';
  stepToCount(count.value, step.value);
  outputP.classList.remove('hidden');
});

// hide outputP when an input is focused
inputs.forEach(function (input) {
  input.addEventListener('focus', function () {
    outputP.classList.add('hidden');
  });
});