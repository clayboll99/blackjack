import {defineMongooseModel} from "#nuxt/mongoose";

export const User = defineMongooseModel({
    name: 'User',
    schema: {
        sub: String,
        email_verified: Boolean,
        name: String,
        preferred_username: String,
        given_name: String,
        family_name: String,
        email: String,
    }
})