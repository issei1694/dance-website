document.addEventListener('DOMContentLoaded', function () {
    // Sample data for classes and events
    const classes = [
        { name: 'Ballet', description: 'Classical ballet classes for all levels.' },
        { name: 'Hip-Hop', description: 'Energetic hip-hop classes for all ages.' },
        { name: 'Salsa', description: 'Learn to salsa with our expert instructors.' },
        { name: 'Jazz', description: 'Expressive jazz dance classes.' },
    ];

    const events = [
        { name: 'Annual Dance Recital', date: 'August 20, 2024' },
        { name: 'Hip-Hop Dance Battle', date: 'September 15, 2024' },
        { name: 'Salsa Night', date: 'October 10, 2024' },
        { name: 'Holiday Dance Showcase', date: 'December 5, 2024' },
    ];

    const classList = document.getElementById('classList');
    const eventList = document.getElementById('eventList');

    classes.forEach(classItem => {
        const li = document.createElement('li');
        li.textContent = `${classItem.name}: ${classItem.description}`;
        classList.appendChild(li);
    });

    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(li);
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
