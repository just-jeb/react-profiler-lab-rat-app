import { Chance } from 'chance';
import React, { useState } from 'react';
import './FilterableList.css';
import { List } from '../List/List';
import { Filter } from '../Filter/Filter';
const chance = new Chance();

const items = Array.from({ length: 200 }, (_, index) => ({ value: `${chance.integer()}`, id: index}));

export const FilterableList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return <div className={'filterableList'}>
        <Filter onValueUpdated={setSearchTerm} />
        <List entries={items.filter(item => item.value.includes(searchTerm))} />
    </div>
}