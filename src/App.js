import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedValue, setEditedValue] = useState("");

  let addList = () => {
    setList([...list, text]);
    setText("");
  };

  let deleteList = (i) => {
    const updatedList = list.filter((item, index) => index !== i);
    setList(updatedList);
  };

  let startEdit = (i) => {
    setEditedValue(list[i]);
    setEditIndex(i);
  };

  let saveEdit = (i) => {
    const updatedList = [...list];
    updatedList[i] = editedValue;
    setList(updatedList);
    setEditIndex(-1);
    setEditedValue("");
  };

  let cancelEdit = () => {
    setEditIndex(-1);
    setEditedValue("");
  };

  let deleteAll = () => {
    setList([]);
  };

  return (
    <>
      <div className='bg-dark border border-2 shadow-sm rounded my-2 mx-5 py-5 text-white'>
        <h2 className='text-center fw-bold fst-italic mb-3'><u>REACT TODO APP</u></h2>
        <div className='row d-flex flex-column align-items-center justify-content-center'>
          <div className='col d-flex justify-content-center gap-2 m-2'>
            <input
              type='text'
              placeholder='Enter todo'
              className='p-2'
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button type='button' className='btn btn-success p-2' onClick={addList}>Add</button>
            <button type='button' className='btn btn-success p-2' onClick={deleteAll}>Delete All</button>
          </div>

          <div className='col'>
            <ul>
              {list.map((x, i) => (
                <li className='d-flex align-items-center justify-content-center gap-2 m-2' key={i}>
                  {editIndex === i ? (
                    <>
                      <input
                        type='text'
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                      />
                      <button type='button' className='btn btn-primary p-2' onClick={() => saveEdit(i)}>Save</button>
                      <button type='button' className='btn btn-danger p-2' onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <p>{x}</p>
                      <button type='button' className='btn btn-primary p-2' onClick={() => startEdit(i)}>Edit</button>
                      <button type='button' className='btn btn-danger p-2' onClick={() => deleteList(i)}>Delete</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
