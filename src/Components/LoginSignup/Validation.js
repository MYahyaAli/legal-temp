function validation(values){
    alert("")
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email doesn't match"
    } else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if (!(values.password)) {
        error.password = "Password doesn't match"
    } else {
        error.password = ""
    }

    return error;
}

export default validation;