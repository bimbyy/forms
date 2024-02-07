import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: Math.random().toString() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input 
          id="width" 
          name="width" 
          type="text" 
          value={formData.width} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input 
          id="height" 
          name="height" 
          type="text" 
          value={formData.height} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input 
          id="backgroundColor" 
          name="backgroundColor" 
          type="text" 
          value={formData.backgroundColor} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
