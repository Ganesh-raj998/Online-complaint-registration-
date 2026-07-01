import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mailId: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['review', 'assign', 'resolve'], default: 'review' }
}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;
