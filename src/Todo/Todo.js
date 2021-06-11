import React, { useState } from 'react';

const Todo = () => {

    const [data, setData] = useState([]);
    const [tittle, setTitle] = useState('');
    let handleChange = (e) => {
        setTitle(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        setData([

            {
                tittle: tittle,
                checked: false,
                edit: false,
            },
            ...data

        ]
        )
    }
    let handleDelete = (index) => {
        let tmp = [...data]
        tmp.splice(index, 1)

        setData([
            ...tmp
        ]
        )
    }
    let handleStatus = (index) => {
        let tmp = [...data];
        tmp[index].checked = !tmp[index].checked;
        setData(tmp);
    }
    let handleEdit = (index) => {
        setData(data.map((el, x) => {

            if (index == x) {
                el.edit = !el.edit;
            }

            return el;
        })
        )
    }

    let changeText = (index, e) => {
        let tmp = [...data];
        tmp[index].tittle = e.target.value;

        setData(tmp);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter' value={tittle}
                    onChange={handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {data.map((el, index) => {
                    return (
                        <li key={index}>
                            <input type='checkbox' checked={el.checked}
                                onChange={() => { handleStatus(index) }}></input>
                            {el.edit ? (
                                <input value={el.tittle} onChange={(e) => { changeText(index, e) }} />
                            ) : el.tittle}

                            <button onClick={() => { handleEdit(index) }}>{el.edit ? "Done" : "edit"}</button>
                            <button className='delete' onClick={() => { handleDelete(index) }}>Del</button>
                        </li>)
                }
                )
                }
            </ul>
        </div>
    );
};

export default Todo;