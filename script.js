const canvas = document.getElementById("editorCanvas");

function triggerUpload(type) {
  document.getElementById(`${type}Input`).click();
}

document.getElementById("imageInput").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      img.className = "draggable";
      img.style.top = "10px";
      img.style.left = "10px";
      canvas.appendChild(img);
      makeDraggable(img);
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("videoInput").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.className = "draggable";
    video.style.top = "10px";
    video.style.left = "10px";
    canvas.appendChild(video);
    makeDraggable(video);
  }
});

function addText() {
  const text = prompt("Enter your text:");
  if (text) {
    const div = document.createElement("div");
    div.className = "draggable";
    div.textContent = text;
    div.style.top = "10px";
    div.style.left = "10px";
    div.style.background = "#ffffffaa";
    div.style.padding = "4px 8px";
    div.style.borderRadius = "4px";
    canvas.appendChild(div);
    makeDraggable(div);
  }
}

function addTransition() {
  alert("✨ Transitions coming soon!");
}

function makeDraggable(el) {
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener("mousedown", function(e) {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function(e) {
    if (isDragging) {
      el.style.left = e.clientX - offsetX + "px";
      el.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", function() {
    isDragging = false;
  });
}
