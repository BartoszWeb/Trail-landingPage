export const validationPassword = (str) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
};
export const validationEmail = (str) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
};
export const Validate = (values) => {
    let errors = {};
    
    if (!values.email) {
        errors.email = "Email cannot be empty";
    } else if (!validationEmail(values.email)) {
        errors.email = "Email is incorrect";
    }
    
    if (!values.password) {
        errors.password = "Password cannot be empty";
    } else if (!validationPassword(values.password)) {
        errors.password = "Password is incorrect. Password should contain at least one number. One lowercase, one uppercase letter and also at least six characters.";
    }
    
    return errors;
};