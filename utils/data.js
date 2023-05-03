const usernames = [
    'CoolCat23', 
    'HappyGoLucky', 
    'SurfingUSA', 
    'CoffeeLover99', 
    'TechGeek007', 
    'HikingAdventurer', 
    'MusicFanatic88', 
    'FitnessJunkie22', 
    'StarGazer777', 
    'Foodie4Life', 
    'Gamer4Ever', 
    'ArtEnthusiast', 
    'TravelBug99', 
    'YogaMaster123', 
    'NatureLover55', 
    'BookWorm77', 
    'SportsFan101', 
    'Fashionista23', 
    'MovieBuff2022', 
    'AnimalLover99', 
    'ScienceNerd21', 
    'ThrillSeeker88', 
    'HomeCookingQueen', 
    'WineConnoisseur', 
    'BeachBum123',
];

const thoughts = [
'Life is like a camera, focus on the good times, develop from the negatives, and if things dont work out, take another shot.',
'You cant change the past, but you can ruin the present by worrying about the future.',
'Life is 10% what happens to us and 90% how we react to it.',
'If you want to achieve greatness, stop asking for permission.',
'Life is too short to wait.',
'Be yourself; everyone else is already taken.',
'If you dont stand for something, you will fall for anything.',
'Dont wait for opportunity, create it.',
'Everything youve ever wanted is on the other side of fear.',
'If you want to fly, you have to give up the things that weigh you down.',
'The best way to predict your future is to create it.',
'Change your thoughts and you change your world.',
'You miss 100% of the shots you dont take.',
'Believe you can and youre halfway there.',
'Success is not final, failure is not fatal: it is the courage to continue that counts.',
'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
'Be the change you want to see in the world.',
'If you dont like something, change it. If you cant change it, change your attitude.',
'Chase your dreams but always know the road that will lead you home again.',
'No one can make you feel inferior without your consent.',
'Happiness is not something ready-made. It comes from your own actions.',
'The greatest glory in living lies not in never falling, but in rising every time we fall.',
'Dont let yesterday take up too much of today.',
'The only way to do great work is to love what you do.',
'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
`${getRandomArrItem(usernames)}`;

const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
      });
    }
    return results;
  };

module.exports = { getRandomUsername, getRandomThoughts };