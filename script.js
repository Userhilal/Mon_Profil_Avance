document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Le champ nom est requis.');
        event.preventDefault();
        return;
    }
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer un email valide.');
        event.preventDefault();
        return;
    }
    alert('Formulaire soumis avec succès.');
});