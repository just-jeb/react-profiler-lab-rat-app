import React, { FC } from 'react';

interface ListItemProps {
    value: string;
}

export const ListItem: FC<ListItemProps> = ({value}) => <div>{value}</div>