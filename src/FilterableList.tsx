import React, { useState } from 'react';
import { List } from './List';
import { Chance } from 'chance';
const chance = new Chance();

const items = Array.from({ length: 200 }, (_, index) => ({ value: `${chance.integer()}`, id: index}));
export const FilterableList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return <>
        <input type="text" onChange={(event) => setSearchTerm(event.target.value)} />
        <List entries={items.filter(item => item.value.includes(searchTerm))} />
    </>
}