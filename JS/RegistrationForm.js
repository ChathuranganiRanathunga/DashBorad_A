document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const stepContents = document.querySelectorAll(".step-content");

  steps.forEach(function (step, index) {
    step.addEventListener("click", function () {
      updateSteps(index);
      updateStepContents(index);
    });
  });

  function updateSteps(selectedIndex) {
    steps.forEach(function (step, index) {
      if (index <= selectedIndex) {
        step.classList.add("completed");
      } else {
        step.classList.remove("completed");
      }
    });
  }

  function updateStepContents(selectedIndex) {
    stepContents.forEach(function (stepContent, index) {
      if (index === selectedIndex) {
        stepContent.classList.add("active");
      } else {
        stepContent.classList.remove("active");
      }
    });
  }
});

//For Next,Previous and finish buttons
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const stepContents = document.querySelectorAll(".step-content");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const finishButton = document.querySelector(".finish-button");

  let currentStep = 0;

  showStep(currentStep);

  prevButton.addEventListener("click", function () {
    currentStep--;
    showStep(currentStep);
  });

  nextButton.addEventListener("click", function () {
    currentStep++;
    showStep(currentStep);
  });

  function showStep(stepIndex) {
    stepContents.forEach(function (stepContent, index) {
      if (index === stepIndex) {
        stepContent.style.display = "block";
      } else {
        stepContent.style.display = "none";
      }
    });

    steps.forEach(function (step, index) {
      if (index < stepIndex) {
        step.classList.add("completed");
      } else {
        step.classList.remove("completed");
      }
    });

    prevButton.disabled = stepIndex === 0;
    nextButton.style.display =
      stepIndex === stepContents.length - 1 ? "none" : "inline-block";
    finishButton.style.display =
      stepIndex === stepContents.length - 1 ? "inline-block" : "none";
  }
});
