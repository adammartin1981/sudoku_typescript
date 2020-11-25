import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { Content, Title, Card, Grid } from './components'
import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)

unregister()
