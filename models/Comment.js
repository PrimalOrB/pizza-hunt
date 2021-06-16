const { Schema, model, Types } = require( 'mongoose' );
const dateFormat = require( '../utils/dateFormat' );

const ReplySchema = new Schema( 
    {
        replyBody: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        writtenBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat( createdAtVal )
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
 )


const CommentSchema = new Schema( 
    { 
        writtenBy: {
            type: String
        },
        commentBody: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat( createdAtVal )
        },
        replies: [ ReplySchema ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
);

CommentSchema.virtual( 'replyCount' ).get( function() {
    return this.replies.length;
} );

// create the pizza model using the pizzaschema
const Comment = model( 'Comment', CommentSchema );

// export
module.exports = Comment;