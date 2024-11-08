const express = require('express');
const router = express.Router();
const testimonialController = require('../controller/TestimonialsController');

router.post('/add_testimonial', testimonialController.createTestimonial);
router.get('/get', testimonialController.getAllTestimonials);
router.delete('/delete/:id', testimonialController.deleteTestimonial);

module.exports = router;
