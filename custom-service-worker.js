const CACHE_NAME = 'voctrain';

self.addEventListener("fetch", function(event) {
    console.log("Fetch request for:", event.request.url);
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then(function (response) {
                if (response) {
                    console.log('Found response in cache:', response);

                    fetch(event.request).then(function(networkResponse) {
                      cache.put(event.request, networkResponse.clone());

                      return networkResponse;
                    });

                    return response;
                }

                console.log('Fetching request from the network');

                return fetch(event.request).then(function(networkResponse) {
                    cache.put(event.request, networkResponse.clone());

                    return networkResponse;
                });
            });
        }
    ));
});
