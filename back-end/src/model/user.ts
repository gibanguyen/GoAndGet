import mongoose, { Document, Schema } from "mongoose"
import validator from "validator"

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        validate(value: string) {
            if (value.includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        } 
    },
    email: {
        type: String,
        required: true,
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    admin: {
        type: Boolean,
        default: false
    }
}, { 
    collection: 'user'
})

export default mongoose.model('User', UserSchema)