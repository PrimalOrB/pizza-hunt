const { Schema, model } = require( 'mongoose' );

const CommentSchema = new Schema( { 
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
} );

// create the pizza model using the pizzaschema
const Comment = model( 'Comment', CommentSchema );

// export
module.exports = Comment;