const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onLogin);

function onLogin(event) {
    event.preventDefault();
    const elementsForm = event.currentTarget.elements;
    const { email, password } = elementsForm;
    const userData = { email: email.value, password: password.value };

    if (!email.value || !password.value) {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    console.log(userData);
    formEl.reset();
}
