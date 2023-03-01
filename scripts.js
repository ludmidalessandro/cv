function downloadCv() {
    const url = 'archivos/CV- DAlessandro Clara Ludmila.pdf'
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function setActive (e) {
    e.preventDefault()
    const navBarList = document.getElementById("navbarNav-list");
    const navBarElements = navBarList.getElementsByTagName('li');

    for (let i = 0; i < navBarElements.length; i++) {
        navBarElements[i].getElementsByTagName('a')[0].classList.remove('active')
    }
    e.srcElement.classList.add("active")
}

function scrollToSection (keyword) {
    document.getElementById(`section-${keyword}`).scrollIntoView()
}


document.getElementById("descargar-cv-btn").addEventListener('click', downloadCv)