import React, { useState } from 'react'

const TodoList: React.FC = () => {

    interface Item {
        id: number;
        text: string;
        completed: boolean;
    }

    const [input, setInput] = useState([])

    const [todos, setTodos] = useState<Item[]>([
        { id: 1, text: 'Clean Room', completed: false },
        { id: 2, text: 'Go for Walk', completed: false }
    ]);

    const handleClick = () => {
        if (input.trim() !== '') {
            const newTodos: Item = { id: Date.now(), text: input, completed: false }
            setTodos([...todos, newTodos]);
            setInput('');
        }
    };

    return (
        <>
            <div className='heading-containers'>
                <h2>Todo-List by Priyanshu</h2>
            </div>

            <div className='main-container'>
                <input type='text' value={input} />
                <button onClick={handleClick}>Add</button>
            </div>
        </>
    )
}

export default TodoList