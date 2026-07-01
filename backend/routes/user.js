import express from 'express';
import Complaint from '../models/Complaint.js';

const router = express.Router();

// Post a Complaint
router.post('/complaint', async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json({ message: 'Complaint submitted successfully', complaint });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Citizen's Own Complaints (Fetches latest 10)
router.get('/my-complaints/:email', async (req, res) => {
  try {
    const complaints = await Complaint.find({ mailId: req.params.email }).sort({ createdAt: -1 }).limit(10);
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
