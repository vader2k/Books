import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    cover: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Book", BookSchema)