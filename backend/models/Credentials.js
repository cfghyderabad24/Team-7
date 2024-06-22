const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define a schema for credentials
const credentialsSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: true } // true for librarian, false for others
});

credentialsSchema.pre('save', async function(next){
  const person = this;

  // Hash the password only if it has been modified (or is new)
  if(!person.isModified('password')) return next();

  try{
      // hash password generation
      const salt = await bcrypt.genSalt(10);

      // hash password
      const hashedPassword = await bcrypt.hash(person.password, salt);
      
      // Override the plain password with the hashed one
      person.password = hashedPassword;
      next();
  }catch(err){
      return next(err);
  }
})

credentialsSchema.methods.comparePassword = async function(candidatePassword){
  try{
      // Use bcrypt to compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
  }catch(err){
      throw err;
  }
}

// Define a model for credentials
const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;