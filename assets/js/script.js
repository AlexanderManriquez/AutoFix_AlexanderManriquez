const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const reparationType = [
            document.getElementById('cambio-aceite').checked ? 'Cambio de aceite' : '',
            document.getElementById('revision-frenos').checked ? 'Revisión de Frenos' : '',
            document.getElementById('revision-electrica').checked ? 'Revisión eléctrica' : ''
        ];
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;
        const alertMessage = document.getElementById('alertMessage');

        if (name && email && reparationType.some(type => type) && date) {
            console.log('Formulario enviado:', {
                name,
                email,
                reparationType: reparationType.filter(type => type).join(', '),
                date,
                message
            });

            // Abrir el modal del formulario de pago
            const payModal = new bootstrap.Modal(document.getElementById('paySection'));
            payModal.show();
            alertMessage.classList.add('d-none');
        } else {
            alertMessage.classList.remove('d-none');
        }
    })
});