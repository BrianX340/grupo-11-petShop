window.onload = () => {
    document.addEventListener('click', (event)=>{
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        }
        catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }

        if (elementId=='selectAvatarButton'){
            document.getElementById('avatarBox').style.display = 'flex'
            event.preventDefault()
        }

        if (elementClass == 'avatarClicked'){
            avatarName = elementId
            document.getElementById('avatarId').value = avatarName
            document.getElementById('avatarBox').style.display = 'none'
        }
        loadState()
    })

}
function loadState(){
    let $provinceList = document.querySelector('#provinceList')
        
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(function (response){
        return response.json();
        })
        .then( function (result){
        let provinces = result.provincias.sort(function (prev, next){
        prev.nombre > next.nombre ? 1 : prev.nombre < next.nombre ? -1 : 0;
        });
        
        provinces.forEach(province => {
        $provinceList.innerHTML += `<option value="${province.nombre}">${province.nombre}</option>`
        });
        })
        .catch(function (error){
        console.log(error);
        });
}
/* $provinceList.addEventListener('change', function(event){
    
    let idProvince = event.target.value
    
    function fetchCities (id){
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=22&campos=id,nombre&max=5000`)
    .then(response => response.json())
    .then(result => {
    let cities = result.localidades.sort(function (prev, next){
    prev.nombre > next.nombre ? 1 : prev.nombre < next.nombre ? -1 : 0;
    });
    cities.forEach(city => {
    $cities.forEach(city => {
                        $citiesList.innerHTML += `<option value="${city.nombre}">${city.nombre}</option>` 
                    })
    
    })
    }
    fetchCities(idProvince)
    }) */