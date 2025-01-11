import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,// cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url for image 

    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    refreshToken: {
        type: String,

    },
}, { timestamps: true })

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
    },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY

    }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY

    }
    )
 }

export const User = mongoose.model("User", userSchema)