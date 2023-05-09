const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { users, thoughts, getFriends} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Drop existing users
    await User.deleteMany({});

    const userData = await User.insertMany(users);
//     
    for (let i = 0; i < userData.length; i++) {
        const user = userData[i];
        const friendCount = Math.floor(Math.random() * userData.length)
        const friends = getFriends(userData, user._id, friendCount);
        
        const thought = await Thought.create({
            thoughtText: thoughts[i],
            username: user.username,
        })

        await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { friends, thoughts: [thought._id]} },
            { runValidators: true, new: true }
        )
    }
    // Log out the seed data to indicate what should appear in the database

    console.info('Seeding complete! 🌱');
    process.exit(0);
});