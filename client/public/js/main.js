const password = document.querySelector('#password')
const confirm = document.querySelector('#confirm')
const submit = document.querySelector('#submit')
const err = document.querySelector('#pass-err')

password.addEventListener('focusout', () => {
    confirm.addEventListener('keyup', () => {
        if (password.value !== confirm.value) {
            submit.attr('disabled')
            err.classList.remove('hidden')
        } else {
            submit.removeAttribute('disabled')
            err.classList.add('hidden')
        }
    })
})
