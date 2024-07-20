import React, { useState } from 'react';
import './App.css';
import './dist/css/app.css';

function Main() {
    // State to manage the list of names and the current input value
    const [names, setNames] = useState([{ id: 1, name: 'Ajith' }]);
    const [inputName, setInputName] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        setInputName(event.target.value);
    };

    // Handle form submission
    const handleSubmit = () => {
        // Add new name to the list with an incremented ID
        const newName = { id: names.length + 1, name: inputName };
        setNames([...names, newName]);
        setInputName(''); // Clear the input field
    };

    return (
        <div className="content">
            <div className="top-bar">
                <div className="ml-auto">
                    <h1 id="user_id"></h1>
                </div>
            </div>
            <div className="box">
                <div className="flex flex-col lg:flex-row items-center p-5">
                    <h1 className="text-lg font-bold">Ticket Manager</h1>
                </div>
            </div>
            <div className="grid1 grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 overflow-auto box">
                    <div className="p-5">
                        <div className="flex-col ml-6">
                            <label className="form-control">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="add_ticket_team_name"
                                id="add_ticket_team_name"
                                value={inputName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary shadow-md mt-6"
                                id="add_team_success"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid1 grid-cols-12 gap-6 mt-5 box p-8">
                <table className='mx-auto'>
                    <thead>
                        <tr>
                            <th className='w-28'>Sl</th>
                            <th className='w-64'>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name) => (
                            <tr key={name.id}>
                                <td>{name.id}</td>
                                <td>{name.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Main;
