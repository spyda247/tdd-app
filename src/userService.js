const db = require('../db');

async function getUserProfile(userId) {
  const user = await db.findUserById(userId);
  if (!user) throw new Error('User not found');
  return { name: user.name, age: user.age };
}

module.exports = { getUserProfile };