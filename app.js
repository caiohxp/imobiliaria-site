function showSection(sectionId, button) {
    document.getElementById('imagens-section').style.display = 'none';
    document.getElementById('plantas-section').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
    const buttons = document.querySelectorAll('.btn-section-img-planta');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function changeImage(imageSrc, imageId, button) {
    document.getElementById(imageId).src = imageSrc;
    const buttons = document.querySelectorAll('.btn-img-planta');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}