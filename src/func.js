import {getState} from "./global-state/global-state"
const url = "https://raw.githubusercontent.com/adhemukhlis/my-portfolio/master/properties.jso" +"n"

export const getData = (callback) => {
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
const getOld = () => {
    return 1900 + new Date().getYear() - getState("_globalUserData").year_of_birth
}
export function StringBuilder(str) {

    var mapString = {
        _getOld: getOld(),
        // _dog: "DOG",
        // _goat: "GOat"
    };
    // return str.replace(/_getOld|_dog|_goat/g, function (matched) {
    //     return mapString[matched];
    // });
    return str.replace(/_getOld/g, function (matched) {
        return mapString[matched];
    });
}