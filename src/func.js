const url = "https://raw.githubusercontent.com/adhemukhlis/my-portfolio/master/properties.json"
export const getData=(callback)=>{
    fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return
            }
            response
                .json()
                .then(function (data) {
                    console.log(data.fullname)
                    callback(data)
                })
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err)
        })
}