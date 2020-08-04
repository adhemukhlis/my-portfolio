import {state, setState} from "react-rest-state";
import {rootRef} from "../_firebase/firebaseRef"

export const setUserData = (userdata) => {
    setState({
        _globalUserData: userdata
    }, () => {
        console.log("user data loaded!");
    });
};
export const accessValidation = (callback) => {
    rootRef
        .child("accesskey")
        .child(window.ClientID)
        .once('value', key => {
            if (key.exists()) {
                rootRef
                    .child("user")
                    .child(key.val().username)
                    .once('value', user => {
                        if (user.exists() && user.val().website_url.includes(window.location.href)) {
                            rootRef
                                .child("user_contact")
                                .child(user.val().username)
                                .once('value', contact => {
                                    setUserData({
                                        "fullname": user
                                            .val()
                                            .fullname,
                                        "year_of_birth": user
                                            .val()
                                            .year_of_birth,
                                        "job": user
                                            .val()
                                            .job,
                                        "bio": user
                                            .val()
                                            .bio,
                                        "about_me": user
                                            .val()
                                            .about_me,
                                        "contact": Object
                                            .values(contact.val())
                                            .map(e => {
                                                return e
                                            })

                                    })
                                    callback(true)
                                })

                        } else {
                            console.log("denied : URL tidak diizinkan!")
                        }
                    })
            } else {
                console.log("denied : config key tidak diizinkan!")
            }
        })
}