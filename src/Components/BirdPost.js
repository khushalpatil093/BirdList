import { add, increment } from "../redux/action/counterAction";
import { useDispatch, useSelector } from "react-redux";
import React, {useState} from "react";

const BirdPost = () => {

    const [inputValue, setInputValue] = useState('');
    const items = useSelector((state) => state)
    const dispatch = useDispatch();

    const handleInputChanges = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddItems = () => {
        if(inputValue.trim !== ''){
            dispatch(add(inputValue));
            setInputValue('');
        }
    }

    return (
        <>
            <h1>Bird List</h1>
            <p>Add Bird</p>
            <input 
                value={inputValue}
                onChange={handleInputChanges}
                type="text" 
                placeholder="type here something"
            /> <br/>
            <button onClick={handleAddItems}>Add</button>
            <div>
                
                <ul>
                    {
                        items.map((item, index) => ( 
                            <li key={index}>
                                <p>{item.bird}</p>
                                <span>Like : {item.count} </span>
                                <button onClick={() => dispatch(increment(index))} >+</button>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default BirdPost;