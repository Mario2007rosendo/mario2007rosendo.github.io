function toggleText(id) {
    const allBoxes = document.querySelectorAll('.text-box');
    allBoxes.forEach(box => {
        if (box.id !== id) {
            box.classList.remove('open');
        }
    });
    document.getElementById(id).classList.toggle('open');
}