const validateLength = (value, length=20) => {
    const pattStr = '^.{0,len}$';
    const patt = new RegExp(pattStr.replace('len', length));
    return patt.test(value);
}

const validateName = (name) => {
    // no digits, 1-12 chars
    const patt = /^([^0-9]{0,12})$/;
    return patt.test(name);
}

const validateJob = (job) => {
    // 0-22 chars
    //const patt = /^.{0,20}$/;
    return validateLength(job, 22);
}

const validatePhone = (phone) => {
    // no letters
    const patt = /[^A-Za-z]$/;
    return patt.test(phone) && validateLength(phone);
}

const validateDate = (date) => {
    const patt = /^[0-9]{0,2}\/[0-9]{0,4}$/;
    return patt.test(date);
}

const validateOnlyDigits = (digits, n) => {
    const pattStr = '^[0-9]{0,n}$';
    const patt = new RegExp(pattStr.replace('n', n));
    return patt.test(digits);
}

export {
    validateLength,
    validateName,
    validateJob,
    validatePhone,
    validateDate,
    validateOnlyDigits
}

