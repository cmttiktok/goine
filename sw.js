self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Cuộc gọi đến', body: 'Bạn có cuộc gọi mới!' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/5585/5585856.png',
            vibrate: [200, 100, 200]
        })
    );
});
