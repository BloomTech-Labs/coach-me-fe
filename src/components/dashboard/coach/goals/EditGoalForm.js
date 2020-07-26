import React from 'react';

const EditGoalForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="date"
                placeholder="start-date"
                value={new Intl.DateTimeFormat('en-US').format(
                    new Date(props.editGoal.start_date)
                )}
                name="start_date"
                onChange={props.handleChange}
            />
            <input
                type="text"
                placeholder="title"
                value={props.editGoal.title}
                name="title"
                onChange={props.handleChange}
            />
            <input
                type="text"
                placeholder="description"
                value={props.editGoal.description}
                name="description"
                onChange={props.handleChange}
            />
            <select
                name="completed"
                onChange={props.handleChange}
                value={props.editGoal.completed}
            >
                <option value="true">Completed</option>
                <option value="false">Incomplete</option>
            </select>
            <button type="submit">Confirm</button>
        </form>
    );
};

export default EditGoalForm;
