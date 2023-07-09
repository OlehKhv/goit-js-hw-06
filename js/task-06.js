const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
    if (
        event.currentTarget.value.trim().length ===
        Number(event.currentTarget.dataset.length)
    ) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        // return;
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
});
