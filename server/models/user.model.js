const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3 
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    role: {
        type: String,
        default: 'regular',
        enum: [
            'regular',
            'admin'
        ]
    }   
}, {
    timestamps: true,
});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
})

const User = mongoose.model('User', userSchema);

module.exports = User;