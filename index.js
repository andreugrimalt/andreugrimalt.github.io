const startAudio = async () => {
  const context = new AudioContext();
  await context.audioWorklet.addModule("./worklet.js", { credentials: "omit" });
  const modulator = new OscillatorNode(context);
  const modGain = new GainNode(context);
  const noiseGenerator = new AudioWorkletNode(context, "noise-generator");
  noiseGenerator.connect(context.destination);

  // Connect the oscillator to 'amplitude' AudioParam.
  const paramAmp = noiseGenerator.parameters.get("amplitude");
  modulator.connect(modGain).connect(paramAmp);

  modulator.frequency.value = 0.5;
  modGain.gain.value = 0.75;
  modulator.start();
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
