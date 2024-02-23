document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("years");
  const targetNumber = 4;
  const duration = 1500; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});

document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("projects");
  const targetNumber = 200;
  const duration = 1500; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});

document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("Clientele");
  const targetNumber = 10;
  const duration = 1500; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});
