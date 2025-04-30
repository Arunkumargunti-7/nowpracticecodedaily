// Answer Update and Save
document.getElementById("updateAnswer").addEventListener("click", () => {
  const input = document.getElementById("answer").value;
  document.getElementById("status").innerText = input
    ? "Guess updated (not yet saved)."
    : "Please enter an answer first.";
});

document.getElementById("saveAnswer").addEventListener("click", () => {
  const input = document.getElementById("answer").value;
  if (input) {
    localStorage.setItem("answer", input);
    document.getElementById("status").innerText = "Your answer has been saved!";
  } else {
    document.getElementById("status").innerText = "No answer to save.";
  }
});

// Image Guess Update and Save
document.getElementById("updateImage").addEventListener("click", () => {
  const input = document.getElementById("imageName").value;
  document.getElementById("imageStatus").innerText = input
    ? "Image name updated (not yet saved)."
    : "Please enter the image name.";
});

document.getElementById("saveImage").addEventListener("click", () => {
  const input = document.getElementById("imageName").value;
  if (input) {
    localStorage.setItem("imageName", input);
    document.getElementById("imageStatus").innerText = "Image name saved!";
  } else {
    document.getElementById("imageStatus").innerText = "No image name to save.";
  }
});

// Document Upload
document.getElementById("documentUpload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  document.getElementById("documentStatus").innerText = file
    ? `Selected: ${file.name}`
    : "No document selected.";
});

// Image Upload (optional: just show filename)
document.getElementById("imageUpload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById("imageStatus").innerText = `New image selected: ${file.name}`;
  }
});
