var URL="data/catatan.json";
fetch(URL)
    .then(function(response){
        if (response.status !== 200) { //HTTP Status    
            return 'Ada masalah. Status Code: ' + response.status;                 
        }
    return response.json()
    })
    .then( res => {
            console.log(res)
            let t= document.getElementById('hasil');
            t.textContent = res.judul + " " + res.lokasi
        }
    )
    .catch( err => console.log(err) );