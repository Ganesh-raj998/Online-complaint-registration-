import express from 'express';
import Complaint from '../models/Complaint.js';

const router = express.Router();

// Get 20 Complaints for Officer View
router.get('/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 }).limit(20);
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Complaint Status (Review/Assign/Resolve)
router.put('/complaint/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
