import React, { useState } from 'react';
import { addTestimonial } from '../../slices/testimonialSlice';
import { useSelector, useDispatch } from "react-redux";

const AdminAddTestimonial = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
const { loading, error,data } = useSelector((state) => state.testimonial.addTestimonial);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { name, title, text, rating };
    addTestimonial(newTestimonial); // Dispatch to Redux or API call
    setName('');
    setTitle('');
    setText('');
    setRating(0);
  };
console.log(error,data)
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Review" required />
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => setRating(star)} style={{ color: star <= rating ? 'gold' : 'gray' }}>
            ★
          </span>
        ))}
      </div>
      <button type="submit">Add Testimonial</button>
    </form>
  );
};

export default AdminAddTestimonial;
