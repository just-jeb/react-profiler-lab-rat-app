import React, { FC } from 'react';
import './List.css';
import { ListItem } from '../ListItem/ListItem';

export interface ListProps {
  entries: string[];
}

export const List: FC<ListProps> = ({entries}) => {
  return (
    <div className="list">
      {entries.map((value, index) => 
        <ListItem key={index} value={value}/>
      )}
    </div>
  );
}
