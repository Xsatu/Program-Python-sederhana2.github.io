var confirm = confirm('Klik OK untuk melanjutkan');

if( confirm === true ) {
    window.location = '/index.html';
} else {
    window.location = 'https://www.google.com/';
}