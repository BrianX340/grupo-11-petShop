window.addEventListener("load", () =>{
    let provinceSelect = document.getElementById("provinceList");
    let citySelect = document.getElementById("cityList");

    (function provincesApi(){
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => {
            return response.json();
        })
        .then(result => {
            result.provincias.sort(function(prev,next){
                return prev.nombre > next.nombre
            })

            let options = '';

            result.provincias.forEach(provincia => {
                options += `<option value = "${provincia.nombre}">${provincia.nombre}</option>`
            })

            provinceSelect.innerHTML += options;
        })
    })()

    function citysApis() {
        let province = provinceSelect.value;
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=${province}`)
            .then(response =>{
                return response.json();
            })
            .then(result => {
                result.localidades.sort(function(prev,next){
                    return prev.nombre > next.nombre
                })
                if(citySelect.value != 0) {
                    citySelect.innerHTML = `<option selected hidden value="${citySelect.value}" >${citySelect.value}</option>`
                } else {
                    citySelect.innerHTML = `<option selected hidden value="">Localidad</option>`
                }
                let options = ''
                result.localidades.forEach(city => {
                    options += `<option value = "${city.nombre.toLowerCase()}">${city.nombre.toLowerCase()}</option>`
                })
                citySelect.innerHTML += options;
            })
    }
    if(provinceSelect.value != 0){
        citysApis()
    }

    provinceSelect.addEventListener('change', () =>{
        citysApis()
    })

})