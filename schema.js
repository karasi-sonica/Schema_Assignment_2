const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 500,
    },
    commentAt: {
        type: Date,
        default: Date.now,
    },
});

const blogPostSchema = new mongoose.Schema ({
    title: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    category: {
        type: String,
        default: "General",
        trim: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [commentSchema],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedUp: {
        type: Date,        
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("BlogPost", blogPostSchema);