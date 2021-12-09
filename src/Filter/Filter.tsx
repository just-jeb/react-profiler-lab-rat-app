import React, { FC } from 'react';
import './Filter.css';

interface FilterProps {
    onValueUpdated: (value: string) => void;
}

export const Filter: FC<FilterProps> = ({ onValueUpdated }) =>
(<div className="form__group field">
    <input type="input" name={'filter'} className={'form__field'} placeholder={'filter'} id={'filter'} onChange={(event) => onValueUpdated(event.target.value)}/>
    <label htmlFor="filter" className="form__label">Enter a number</label>
</div>)
