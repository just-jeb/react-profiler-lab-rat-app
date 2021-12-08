import React, { FC } from 'react';
import './ListItem.css';
interface ListItemProps {
    value: string;
}

export const ListItem: FC<ListItemProps> = ({value}) => <div className={'item'}>{value}</div>