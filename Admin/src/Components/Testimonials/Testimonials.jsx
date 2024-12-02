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
    dispatch(addTestimonial({name, title, text, rating}))
    setName('');
    setTitle('');
    setText('');
    setRating(0);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };
  console.log(error,data)

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add a New Testimonial</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Review:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>

        <div style={styles.fieldContainer}>
          <label style={styles.label}>Rating:</label>
          <div style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                style={{
                  ...styles.star,
                  color: star <= rating ? '#FFD700' : '#c3c3c3',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
            
        <button type="submit" style={styles.button}>Add Testimonial</button>
      </form>
    </div>
  );
};

// Inline CSS styles as JavaScript objects
const styles = {
  container: {
    boxSizing: 'border-box',
    maxWidth: '800px',
    width: '100%',
    padding: '30px 40px',
    margin: '30px auto',
    borderRadius: '25px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  fieldContainer: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #c3c3c3',
    outline: 'none',
    color: '#606060',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '15px',
    transition: 'border-color 0.2s ease',
  },
  textarea: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #c3c3c3',
    outline: 'none',
    color: '#606060',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '15px',
    transition: 'border-color 0.2s ease',
    resize: 'vertical',
  },
  starContainer: {
    display: 'flex',
    gap: '5px',
  },
  star: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    height: '50px',
    borderRadius: '6px',
    backgroundColor: 'black',
    border: 'none',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '30px',
    transition: 'background-color 0.2s ease',
  },
};

export default AdminAddTestimonial;
