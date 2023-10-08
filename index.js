// creating a string of all different characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

const generatePassword = () => {
    const length = document.getElementById('length').value;
    const password = document.getElementById('password');
    let newPassword = '';
    for (var index = 0; index < length ; index++) {
        randomIndex = Math.floor(Math.random()*characters.length);
        newPassword += characters.charAt(randomIndex);
    }
    password.innerText = newPassword;
    return newPassword;
}