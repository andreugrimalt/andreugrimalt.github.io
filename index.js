import { acquireWakeLock } from "./wakeLock.js";
const startAudio = async () => {
  const context = new AudioContext();
  await context.audioWorklet.addModule("./worklet.js", { credentials: "omit" });
  const noiseGenerator = new AudioWorkletNode(context, "noise-generator");
  noiseGenerator.connect(context.destination);
};

// add button
const canvas = document.getElementById("mainCanvas");
canvas.addEventListener("click", function handler() {
  startAudio();
  acquireWakeLock();
  canvas.removeEventListener("click", handler);
});
