// Handle Answer Section
document.getElementById("updateAnswer").addEventListener("click", function() {
  const answerInput = document.getElementById("answer").value;
  if (answerInput !== "") {
      document.getElementById("status").innerText = "Guess updated (not yet saved).";
  } else {
      document.getElementById("status").innerText = "Please enter an answer first.";
  }
});

document.getElementById("saveAnswer").addEventListener("click", function() {
  const answerInput = document.getElementById("answer").value;
  if (answerInput !== "") {
      localStorage.setItem("answer", answerInput); // Save answer in localStorage
      document.getElementById("status").innerText = "Your answer has been saved!";
  } else {
      document.getElementById("status").innerText = "No answer to save.";
  }
});

// Handle Image Section
document.getElementById("updateImage").addEventListener("click", function() {
  const imageNameInput = document.getElementById("imageName").value;
  if (imageNameInput !== "") {
      document.getElementById("imageStatus").innerText = "Image name updated (not yet saved).";
  } else {
      document.getElementById("imageStatus").innerText = "Please enter the image name.";
  }
});

document.getElementById("saveImage").addEventListener("click", function() {
  const imageNameInput = document.getElementById("imageName").value;
  if (imageNameInput !== "") {
      localStorage.setItem("imageName", imageNameInput); // Save image name in localStorage
      document.getElementById("imageStatus").innerText = "Image name saved!";
  } else {
      document.getElementById("imageStatus").innerText = "No image name to save.";
  }
});

// Handle Document Upload Section
document.getElementById("documentUpload").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
      document.getElementById("documentStatus").innerText = `Selected: ${file.name}`;
  } else {
      document.getElementById("documentStatus").innerText = "No document selected.";
  }
});
