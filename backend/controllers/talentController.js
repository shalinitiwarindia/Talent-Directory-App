const Talent = require('../models/Talent');

exports.createTalent = async (req, res, next) => {
  try {
    const { name, email, skills = [], experience = 0 } = req.body;
    // normalized
    const normalizedEmail = String(email).toLowerCase().trim();

    // check required
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

    // check duplicate
    const existing = await Talent.findOne({ email: normalizedEmail });
    if (existing) return res.status(409).json({ error: 'Email already exists' });

    const talent = new Talent({
      name: name.trim(),
      email: normalizedEmail,
      skills: Array.isArray(skills) ? skills.map(s => String(s).trim()).filter(Boolean) : [],
      experience: Number(experience) || 0
    });

    await talent.save();
    return res.status(201).json(talent);
  } catch (err) {
    // handle duplicate key error (race)
    if (err.code === 11000) return res.status(409).json({ error: 'Email already exists' });
    next(err);
  }
};

exports.getTalents = async (req, res, next) => {
  try {
    const { skill } = req.query;
    let filter = {};
    if (skill) {
      filter = { skills: { $regex: new RegExp(skill, 'i') } };
    }
    const talents = await Talent.find(filter).sort({ createdAt: -1 });
    res.json(talents);
  } catch (err) {
    next(err);
  }
};
