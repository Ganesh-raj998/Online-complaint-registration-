import express from 'express';
import Complaint from '../models/Complaint.js';

const router = express.Router();

// Admin can see all 20 complaints (similar to officer but distinct route)
router.get('/all-complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 }).limit(20);
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
