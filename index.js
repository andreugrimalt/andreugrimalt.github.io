const startAudio = async () => {
  const context = new AudioContext();
  await context.audioWorklet.addModule("./worklet.js", { credentials: "omit" });
  const noiseGenerator = new AudioWorkletNode(context, "noise-generator");
  noiseGenerator.connect(context.destination);
};

// add button
const button = document.createElement("button");
const audioPlayer = document.createElement("audio");
audioPlayer.controls = true;
audioPlayer.src = "./emptyAudio.mp3";
audioPlayer.addEventListener("ended", () => audioPlayer.play());
button.innerHTML = "start audio worklet";
button.addEventListener("click", startAudio);
document.body.appendChild(button);
document.body.appendChild(audioPlayer);
