
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ toDos, setToDos, setEditIndex }) {
    const [toDo, setToDo] = useState('');
    const navigate = useNavigate();
    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <div className="input">
                <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                <i onClick={() => {
                    if (toDo.trim() !== '') {
                        setToDos([...toDos, { text: toDo, status: false }]);
                        // console.log(setToDos());

                        setToDo('');
                    }
                }} className="fas fa-plus"></i>
            </div>
            <div className="todos">
                {toDos.map((obj, index) => {
                    return (
                        <div className="todo" key={index}>
                            <div className="left">
                                <input checked={obj.status} onChange={(e) => {
                                    // console.log(e.target.checked);
                                    // console.log(obj);
                                    const updated = toDos.map((item, i) =>
                                        i === index ? { ...item, status: e.target.checked } : item
                                    );
                                    setToDos(updated);
                                }} type="checkbox" name="" id="" />
                                <p>{obj.text}</p>
                            </div>
                            <div className="right">
                                <i onClick={() => {
                                    const updated = toDos.filter((_, i) => i !== index);
                                    setToDos(updated);
                                }} className="fas fa-times"></i>
                                <i onClick={()=> {
                                    setEditIndex(index);
                                    navigate('/edit');
                                }} className="fa-regular fa-pencil"></i>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Home
