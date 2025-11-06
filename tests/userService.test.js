// This tests simulates stub/mock with Jest

const userService = require('../src/userService');
const db = require('../db');

// Mock db module functions using jest
jest.mock('../db');

test('returns user profile when user exists', async () => {
  // create a stub
  db.findUserById.mockResolvedValue({ name: 'Sam', age: 30 });

  // execute the test
  const profile = await userService.getUserProfile('123');
  expect(profile).toEqual({ name: 'Sam', age: 30 });
});

test('throws error if user does not exist', async () => {
  //create stub
  db.findUserById.mockResolvedValue(null);
  await expect(() => userService.getUserProfile('999')).rejects.toThrow('User not found');
});