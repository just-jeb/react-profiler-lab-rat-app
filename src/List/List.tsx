import React, { FC } from 'react';
import './List.css';
import { ListItem } from '../ListItem/ListItem';

export interface ListProps {
  entries: {value: string, id: number}[];
}

export const List: FC<ListProps> = ({entries}) => {
  return (
    <div className="list">
      {entries.map(({id, value}) => 
        <ListItem key={id} value={value}/>
      )}
    </div>
  );
}
