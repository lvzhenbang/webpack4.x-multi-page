if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator
      .serviceWorker
      .register(`${SERVICE_URL}/service-worker.js`)
      .then(registration => {
        console.log(`Yay! Workbox is loaded 🎉. ${registration}`);
      }).catch(registrationError => {
        console.log(`Boo! Workbox didn't load 😬.  ${registrationError}`);
      });
  });
}