export const checkValidateForm = (email, password, name, nationality) => {
    const emailvalidate = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const namevalidation = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    
    if (!emailvalidate) return "Email is not Valid";
    if (!passwordvalidate) return "Password is not Valid";
    if (!namevalidation) return "FullName is not Valid";

    return null;
};
