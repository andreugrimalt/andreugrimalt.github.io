import noiseGeneratorUrl from "worklet-loader!./noise-generator.js";

const startAudio = async () => {
  const context = new AudioContext();
  await context.audioWorklet.addModule(noiseGeneratorUrl);
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
button.innerHTML = "start audio worklet";
button.addEventListener("click", startAudio);
document.body.appendChild(button);
