const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onLogin);

function onLogin(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
        alert('Всі поля повинні бути заповнені!');
    }

    console.log({
        email: email.value,
        password: password.value,
    });

    form.reset();
}
