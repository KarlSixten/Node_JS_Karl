import bcrypt from 'bcryptjs';

const saltRounds = 12;
const password = "Hunter12";
const hashedPassword = "$2b$12$WY0dmgt6f0Ec4sZiRJ4v5OzKDARwOBuwQtW40tgQmcKk1Vna20XQG";

// Signup
const passwordHash = await bcrypt.hash(password, saltRounds);
console.log(passwordHash);

// Login
const isSame = await bcrypt.compare(password, hashedPassword);
console.log(isSame);