const Testimonial = require('../models/testimonial');

exports.createTestimonial = async (req, res) => {
  const { name, title, text, rating } = req.body;
  try {
    const newTestimonial = new Testimonial({ name, title, text, rating });
    await newTestimonial.save();
    return res.status(201).json(newTestimonial);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating testimonial' });
  }
};

exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    return res.status(200).json({ data: testimonials });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching testimonials' });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
    return res.status(200).json({ message: 'Testimonial deleted', data: testimonial });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting testimonial' });
  }
};
