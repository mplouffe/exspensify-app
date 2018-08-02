import React from 'react';

const EditExpensePage = (props) => (
    <div>
        Editing the expense of {props.match.params.id}
    </div>
);

export default EditExpensePage;