const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Drop existing users
    await User.deleteMany({});

    // Create empty array to hold the users
    const users = [];

    // Loop 20 times -- add users to the users array
    for (let i = 0; i < 20; i++) {
        // Get some random thought objects using a helper function that we imported from ./data
        const thoughts = getRandomThoughts(20);

        const username = getRandomUsername();
        const email = `${username}${Math.floor(Math.random() * 9000) + 18}@gmail.com`;

        users.push({
            username,
            email,
            thoughts,
        });
    }

    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});