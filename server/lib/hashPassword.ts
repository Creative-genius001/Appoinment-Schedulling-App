const bcrypt = require('bcrypt');

export const hashPassword = async <T extends string>(password: T) => {
    const saltRounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltRounds);
}

export const decryptPassword = async <T, X>(password: T, userPassword: X) => {
    return await bcrypt.compare(password, userPassword);
}