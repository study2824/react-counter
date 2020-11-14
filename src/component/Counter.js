import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import  {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    button: {
        // backgroundColor: "";
    }
})

function Counter (){
    const [count, setCount] = useState(0);
    const classes = useStyle();

    function countAdd() {
     setCount(count + 1);
    };

    function countMinus (){
        setCount(count - 1);
    };

    return (
        <Container>
            <h1>count: {count}</h1>
            <Button variant="contained" className={classes.button} onClick={countAdd}>+</Button>
            <Button variant="contained" className={classes.button} onClick={countMinus}>-</Button>
        </Container>
    );
}


export default Counter;
