import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mailId: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, enum: ['citizen', 'officer', 'admin'], default: 'citizen' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
