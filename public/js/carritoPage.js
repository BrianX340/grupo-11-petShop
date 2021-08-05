

window.onload = () => {
    document.addEventListener('click', (event) => {
        try {
            elementId = event.path[0].id
        }
        catch {
            elementId = event.target.id
        }

        if (elementId == 'seguir-comprando') {
            window.location.href = `${window.location.origin}`+'/'
        }
    })
}