// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

function register(config) {

  window.addEventListener('load', () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("custom-service-worker.js")
        .then(function (registration) {
          console.log("Service Worker registered with scope:",
            registration.scope);
        }).catch(function (err) {
        console.log("Service worker registration failed:", err);
      });
    }
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}


register();
