// Timeline logic for Vizly Editor

const timelineContainer = document.createElement("div");
timelineContainer.className = "timeline-container";
document.body.appendChild(timelineContainer);

let clipCounter = 0;

// Add media to timeline (image/video)
function addToTimeline(type, src) {
  const clip = document.createElement("div");
  clip.className = "timeline-clip";
  clip.dataset.id = "clip-" + clipCounter++;

  if (type === "image") {
    const img = document.createElement("img");
    img.src = src;
    img.className = "thumb";
    clip.appendChild(img);
  } else if (type === "video") {
    const vid = document.createElement("video");
    vid.src = src;
    vid.className = "thumb";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    clip.appendChild(vid);
  }

  clip.draggable = true;
  clip.addEventListener("dragstart", dragStart);
  timelineContainer.appendChild(clip);
}

// Drag and drop within timeline
let draggedClip = null;

function dragStart(e) {
  draggedClip = this;
}

timelineContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

timelineContainer.addEventListener("drop", (e) => {
  if (draggedClip) {
    timelineContainer.appendChild(draggedClip);
    draggedClip = null;
  }
});
