//https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.loop = true;
          const play = () => audio.play();
          audio.addEventListener("durationchange", () => {
            if (audio.duration !== Infinity) {
              resolve({ audioBlob, audioUrl, play, duration: audio.duration });
            }
          });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

export default recordAudio;
/*
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
  const recorder = await recordAudio();
  recorder.start();
  await sleep(3000);
  const audio = await recorder.stop();
  audio.play();
})();

*/
