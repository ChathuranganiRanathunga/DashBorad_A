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
