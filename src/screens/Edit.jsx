import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Edit({ toDos, setToDos, editIndex }) {
    const [newText, setNewText] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (editIndex !== null && toDos[editIndex]) {
            setNewText(toDos[editIndex].text);
        }
    }, [editIndex, toDos]);
    const handleSave = () => {
        const updated = toDos.map((item, i) =>
            i === editIndex ? { ...item, text: newText } : item);
        setToDos(updated);
        navigate('/');
    };
    return (
        <div className='edit-page'>
            <h2> Edit to Do </h2>
            <input className='input' type='text' value={newText} placeholder='Edit the Text' onChange={(e) => setNewText(e.target.value)} />
            
            <div className='button-column'>
                <button onClick={handleSave}>Save</button>
                <button onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
}


export default Edit
