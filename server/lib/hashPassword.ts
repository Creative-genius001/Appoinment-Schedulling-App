const bcrypt = require('bcrypt');

export const hashPassword = async <T extends string>(password: T) => {
    const saltRounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltRounds);
}