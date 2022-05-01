import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto, { BinaryLike } from 'crypto';
import jwt from 'jsonwebtoken';
import { secret } from '../config';

var UserSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    bio: String,
    image: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    hash: String,
    salt: String
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.validPassword = function (password: BinaryLike) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.setPassword = function (password: BinaryLike) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function () {
    let today = new Date();
    let expired = new Date(today);
    expired.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: Math.floor(expired.getTime() / 1000),
    }, secret as any);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image
    };
};

UserSchema.methods.toProfileJSONFor = function (user: any) {
    return {
        username: this.username,
        bio: this.bio,
        image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: user ? user.isFollowing(this._id) : false
    };
};

UserSchema.methods.favorite = function (id: String) {
    if (this.favorites.indexOf(id) === -1) {
        this.favorites.push(id);
    }

    return this.save();
};

UserSchema.methods.unfavorite = function (id: String) {
    this.favorites.remove(id);
    return this.save();
};

UserSchema.methods.isFavorite = function (id: String) {
    return this.favorites.some(function (favoriteId: String) {
        return favoriteId.toString() === id.toString();
    });
};

UserSchema.methods.follow = function (id: String) {
    if (this.following.indexOf(id) === -1) {
        this.following.push(id);
    }

    return this.save();
};

UserSchema.methods.unfollow = function (id: String) {
    this.following.remove(id);
    return this.save();
};

UserSchema.methods.isFollowing = function (id: String) {
    return this.following.some(function (followId: String) {
        return followId.toString() === id.toString();
    });
};

let User = mongoose.model('User', UserSchema);
export default User;