/*//Original Part
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;
*/


import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, Currency } = useContext(AppContext);
    const [cost, setCost] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if(cost > 350 ) {
        //alert("The budget can not be more than 20,000");
        alert("You cannot reduce the budget value lower than the spending");
        setCost("");
        return;
    }
    return (
        <span> Budget:{Currency}
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

/*import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

    if(isEditing > budget) {
        alert("The budget cannot exceed 20,000");
        setIsEditing("");
        return;
    }

	const handleEditClick = () => {
		setIsEditing(true);
	};



	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
*/
