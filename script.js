// Fetch and display upcoming events from JSON
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        const eventList = document.getElementById('event-list');
        events.forEach(event => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${event.link}" target="_blank"><strong>${event.title}</strong></a> - ${event.date}`;
            eventList.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading events:', error));
