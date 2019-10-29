import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>Paola</td>
        </tr>
        <tr>
            <td>Natalia</td>
        </tr>
    </table>
);

ReactDOM.render(myelement, document.getElementById("root"));

//JSX
const myjsx = <h1>I love JSX!</h1>;
ReactDOM.render(myjsx, document.getElementById("root"));