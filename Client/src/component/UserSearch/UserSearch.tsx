import React from 'react';
import { Users } from '../../models/Users';
import { useState, useEffect } from 'react';
import { UsersService } from '../../Services/UserService';
import './UserSearch.css';

interface State {
    users: Users[],
}

interface UserSearchProps {
    setValue: any;
    value: any;
}

const UserSearch = ({ setValue, value }: UserSearchProps) => {

    const [search, setsearch] = useState<any>({});

    const [state, setState] = useState<State>({
        users: [] as Users[],
    });

    useEffect(() => {
        setState({ ...state })
        UsersService.getAllUsers().then((res: any) => setState({
            ...state, users: res.data
        }))
            .catch((err: any) => {
                console.log(err);
                setState({ ...state })
            })
    }, []);

    const { users } = state;


    const onSearch = (searchTerm: any) => {
        setValue(searchTerm);
        setsearch({});
    };


    return (
        <>
            <div className="search-container">
                <input type='text' placeholder=' Search Users' className='searchInput' value={search?.name} onChange={(e) => setsearch({ name: e.target.value })} ></input>

                < div className='drop-down-container'>
                    {users.filter(item => {
                        const searchTerm = search?.name?.toLowerCase();
                        const name = item.name.toLowerCase();
                        return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                    })

                        .map((item: Users) => (
                            <div onClick={() => onSearch(item)} className="search-results" key={item.id} > {item.name}</div>
                        ))}
                </div>

                {
                    value.name &&
                    <div className='profilename'> {value?.name}</div>}
            </div >

        </>
    );
}

export default UserSearch;




