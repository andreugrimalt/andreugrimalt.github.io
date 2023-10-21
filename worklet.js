const noise = new Array(128).fill(0);
noise[0] = Math.random() * 2 - 1;

class NoiseGenerator extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: "amplitude", defaultValue: 0.25, minValue: 0, maxValue: 1 },
    ];
  }
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 1; i < channel.length; i++) {
        noise[0] = noise[noise.length - 1];

        let randomValue = 0.1 * (Math.random() * 2 - 1);

        const newValue = noise[i - 1] + randomValue;

        if (newValue > 0.9 || newValue < -0.9) {
          randomValue *= -1;
        }

        noise[i] = noise[i - 1] + randomValue;
      }

      for (let i = 0; i < channel.length; i++) {
        channel[i] = noise[i];
      }
    });
    return true;
  }
}
registerProcessor("noise-generator", NoiseGenerator);
