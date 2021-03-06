import React, { FC, Children } from 'react'
import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, columnIndex) => (
                <Block colIndex={columnIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
