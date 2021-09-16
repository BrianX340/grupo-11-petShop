document.addEventListener('click',(event)=>{
    try {
        elementId = event.path[0].id
        elementClass = event.path[0].className
    }
    catch {
        elementId = event.target.id
        elementClass = event.path[0].className
    }
    

    switch (elementClass){
        case 'coverHeart':
            heartIdElement = event.target.attributes[1].value
            userId = event.target.attributes[2].value
            elementViewHeart = document.getElementById(heartIdElement+'Heart').style.display

            if (elementViewHeart == 'flex'){
                if(userId){
                    fetch(`${window.location.origin}/api/favorite?userId=${userId}&productId=${heartIdElement}`, {
                    method: 'DELETE',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type':'application/json'
                    }, 
                })
                    .then(function (response) {
                        if (response.status !== 200) {
                            console.log(`Looks like there was a problem. Status code: ${response.status}`);
                            return;
                        }
                        response.json().then(function (data) {
                            document.getElementById(heartIdElement+'Heart').style.display = 'none'
                        });
                    })
                    .catch(function (error) {
                        console.log("Fetch error: " + error);
                    });
                }
                document.getElementById(heartIdElement+'Heart').style.display = 'none'
            } else {
                //console.log( document.getElementById(heartIdElement+'Heart').attributes.userid.value )
                if(userId){
                    fetch(`${window.location.origin}/api/favorite?userId=${userId}&productId=${heartIdElement}`, {
                        method: 'POST',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type':'application/json'
                        }, 
                    })
                        .then(function (response) {
                            if (response.status !== 200) {
                                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                                return;
                            }
                            response.json().then(function (data) {
                                document.getElementById(heartIdElement+'Heart').style.display = 'flex'
                            });
                        })
                        .catch(function (error) {
                            console.log("Fetch error: " + error);
                        });
                }
                document.getElementById(heartIdElement+'Heart').style.display = 'flex'
            }

            break
    }
})