import React, { FC, memo } from 'react';
import './ListItem.css';
interface ListItemProps {
    value: string;
}

export const ListItem: FC<ListItemProps> = memo(({value}) => <div className={'item'}>{value}</div>)