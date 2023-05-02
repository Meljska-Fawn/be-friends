const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactionSchema');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toISOString(),
        },
        username: {
            type: String,
            required: true,
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;