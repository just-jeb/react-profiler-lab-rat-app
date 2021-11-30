import React, { FC, memo } from 'react';

interface ListItemProps {
    value: string;
}

export const ListItem: FC<ListItemProps> = memo(({value}) => <div>{value}</div>)