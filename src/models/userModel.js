const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'first name required']
    },
    
    middlename: {
        type: String,
        required: false
    },

    lastname: {
        type: String,
        required: [true, 'last name required']
    },
    
    institution: {
        type: String,
        required: false
    },

    account_type: {
        type: String,
        required: [true, 'type of account required'],
    },

    email: {
        type: String,
        unique: [true, 'email already has an account'],
        required: [true, 'email address required'],
        lowercase: true
    },

    website: {
        type: String,
        required: false
    },

    password: {
        type: String,
        minlength: [8, 'minimum password length is 8'],
        required: [true, 'password required']
    }
})

const User = mongoose.model('user', userSchema)

// userSchema.pre('save', function() {
//     if (this.password !== null || undefined) {
//         bcrypt.hash(this.password, 'secret-text', function(err, hash) {
//             this.password = hash
//         })
//     }
//     next()
// })

module.exports = User
