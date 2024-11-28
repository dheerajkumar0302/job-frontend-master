const signupValidation = (name: String, value: String) => {
    if (typeof value !== 'string') {
        return `${name} must be a string.`;
    }
    switch (name) {
        case "name":
            if (value.length == 0)
                return "Name is required.";
            return "";
        case "email":
            if (value.length == 0)
                return "Email is required.";
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
                return "Email is invalid."
            return ""
        case "password":
            if (value.length == 0)
                return "Password is required.";
            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,15}$/.test(value))
                return "Password must be 8 to 15 character with an uppercase , a lowercase , a number and a special case character."
            return "";
        default:
            return "";
    }
}
const loginValidation = (name: String, value: String) => {
    if (typeof value !== 'string') {
        return `${name} must be a string.`;
    }
    switch (name) {
        case "email":
            if (value.length == 0)
                return "Email is required.";
            return "";
        case "password":
            if (value.length == 0)
                return "Password is required.";
            return "";
        default:
            return "";
    }
}
export { signupValidation, loginValidation }