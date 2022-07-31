import * as C from './styles'
import {Item} from '../../types/Item'
import { useState } from 'react';

type Props ={
    item: Item;
}
export function ListItem(props:Props){
    const [isChecked, setIsChecked]= useState(props.item.done);
    return(<div>
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}  
                onChange={e => setIsChecked(e.target.checked)}
            />  
            <label>{props.item.name}</label>  
        </C.Container>
    </div>)
}