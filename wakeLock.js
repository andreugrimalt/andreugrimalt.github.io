let wakeLock;
export const acquireWakeLock = async () => {
  if ("wakeLock" in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("wake lock requested");
    } catch (err) {
      console.log(err);
    }
  }
};
export const releaseWakeLock = async () => {
  if ("wakeLock" in navigator) {
    try {
      wakeLock.release();
      webLockDiv.textContent = "Wake lock has been released.";
    } catch (err) {
      console.log(err);
    }
  }
};
