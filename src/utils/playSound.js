let audioContext;

if (typeof window !== "undefined") {
  audioContext = new AudioContext();
}

const playSound = (vol, freq, duration) => {
  if (typeof window !== "undefined") {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "square";
    gain.connect(audioContext.destination);
    gain.gain.value = vol * 0.01;
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration * 0.001);
  }
};

export default playSound;
