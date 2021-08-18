import React, { FC } from 'react';
import './App.css';
import { ListItem } from './ListItem';

export interface ListProps {
  entries: string[];
}

export const List: FC<ListProps> = ({entries}) => {
  return (
    <div className="App">
      {entries.map((entry, index) => 
        <ListItem key={index} value={entry}/>
      )}
    </div>
  );
}
