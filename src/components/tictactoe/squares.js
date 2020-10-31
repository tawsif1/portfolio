/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

export default function Squares({value, onClick }) {
    return (
        <button  css={css` 
        height: 15vh;
        width: 10vw;
        margin-bottom: 50px;
        box-shadow: 10px 10px;
        font: 50px bold;
        font-family: sans-serif;
        background: #FCB19A;

      
        
        
        `} onClick={onClick}>
            {value}

        </button>
    )
}
