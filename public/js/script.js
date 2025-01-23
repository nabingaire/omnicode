const form = document.getElementById('contactForm');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('http://localhost:5002/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            form.reset();
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        alert('Something went wrong. Please try again later.');
    }
});