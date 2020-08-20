// MODAL JS

// DOM ELements as Variables
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close2 = document.getElementById('close-2');
const open2 = document.getElementById('open-2');
const modal2 = document.getElementById('modal-2');

// Show modal on Sign Up
open.addEventListener('click', () => 
    modal.classList.add('show-modal')
);

open2.addEventListener('click', () => 
    modal2.classList.add('show-modal')
);

// Close modal on 'x' button
close.addEventListener('click', () =>
    modal.classList.remove('show-modal')
);

close2.addEventListener('click', () =>
    modal2.classList.remove('show-modal')
);

// Close modal when you click anywhere outside form 
window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    } else {
        return false
    }
}); 

window.addEventListener('click', e => {
    if (e.target == modal2) {
        modal2.classList.remove('show-modal')
    } else {
        return false
    }
}); 