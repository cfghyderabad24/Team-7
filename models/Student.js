// models/student.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
  aadharNumber: { type: String, required: true, unique: true },
  cityId: { type: String, required: true },
  schoolId: { type: String, required: true },
  yearOfEnrollment: { type: Number, required: true },
  grade: { type: Number, required: true },
  rollNumber: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const LocalFormSubmission = mongoose.model('LocalFormSubmission', studentSchema);
const AtlasFormSubmission = mongoose.model('AtlasFormSubmission', studentSchema);

module.exports = { LocalFormSubmission, AtlasFormSubmission };


studentSchema.pre('save', async function(next){
  const person = this;

  // Hash the password only if it has been modified (or is new)
  if(!person.isModified('aadharNumber')) return next();

  try{
      // hash password generation
      const salt = await bcrypt.genSalt(10);

      // hash password
      const hashedPassword = await bcrypt.hash(person.aadharNumber, salt);
      
      // Override the plain password with the hashed one
      person.aadharNumber = hashedPassword;
      next();
  }catch(err){
      return next(err);
  }
})

studentSchema.methods.comparePassword = async function(candidatePassword){
  try{  
      // Use bcrypt to compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(candidatePassword, this.aadharNumber);
      return isMatch;
  }catch(err){
      throw err;
  }
}

module.exports = { LocalFormSubmission, AtlasFormSubmission };
