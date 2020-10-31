/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Squares from './squares'

export default function Board({squares,step, onClick}) {
    return (<div css={css`transform: translate(26vw, 12vh); display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr); `}>

            {squares.map((square, i) => (
      <Squares key={i} value={square} onClick={() => onClick(i)} />
    ))}
        
    </div>
    )
}

