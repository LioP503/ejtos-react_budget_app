
/*
    need to fix code in order to adjust in the app.
    the value will change in the app but not in the code.
*/

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, Currency } = useContext(AppContext);
    const [cost, setCost] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if(cost > 2000 ) {
        //alert("The budget can not be more than 20,000");
        alert("You cannot reduce the budget value lower than the spending");
        setCost("");
        return;
    }
    return (
        <span> Budget: {Currency}
        <input 
                        required='required'
                         type='number'
                         id='budget'
                         value={cost}
                         style={{ marginLeft: '2rem' , size: 10}}
                         onChange={(event) => setCost(event.target.value)}>
        
       
        </input>

        </span>
    );
};
export default Budget;
