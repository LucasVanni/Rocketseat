export default {
    jwt: {
        subject: process.env.APP_SECRET,
        expiresIn: '1d',
    },
};
