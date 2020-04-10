let playSound = () => {};

if (typeof window !== "undefined" && window.AudioContext) {
  const context = new window.AudioContext();

  playSound = reversed => {
    const oscillatorNode = context.createOscillator();
    oscillatorNode.type = "sine";
    const gainNode = context.createGain();
    let duration = 0.3;

    let freq = {
      startValue: reversed ? 400 : 150,
      endValue: reversed ? 150 : 400,
    };

    oscillatorNode.frequency.setValueAtTime(
      freq.startValue,
      context.currentTime
    );

    oscillatorNode.frequency.exponentialRampToValueAtTime(
      freq.endValue,
      context.currentTime + duration
    );

    let gain = {
      startValue: 0.15,
      endValue: 0.001,
    };

    gainNode.gain.setValueAtTime(gain.startValue, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      gain.endValue,
      context.currentTime + duration
    );

    oscillatorNode.connect(gainNode);
    gainNode.connect(context.destination);

    oscillatorNode.start();
    oscillatorNode.stop(context.currentTime + duration);

    oscillatorNode.onended = () => {
      gainNode.disconnect();
      oscillatorNode.disconnect();
    };
  };
}

export default playSound;
