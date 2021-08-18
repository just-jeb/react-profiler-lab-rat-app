import React, { FC } from 'react';
import './App.css';
import { ListItem } from './ListItem';

export interface ListProps {
  entries: {value: string, id: number}[];
}

export const List: FC<ListProps> = ({entries}) => {
  return (
    <div className="App">
      {entries.map(({id, value}) => 
        <ListItem key={id} value={value}/>
      )}
    </div>
  );
}
