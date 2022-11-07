import { Box, Button, ButtonGroup } from '@mui/material'
import React, { Component } from 'react'
import Search from './Components/Search/Search'
import Work from './Components/Work/Work'
import {Routes, Route, Link} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Box>
        <ButtonGroup sx={{
          position:"fixed"
        }}>
          <Button variant='contained'><Link to="/Work"> Work</Link></Button>
          <Button variant='contained'><Link to="/Search">Search</Link></Button>
          <Button variant='contained'>Three</Button>
        </ButtonGroup>
        
        <Routes>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Work" element={<Work/>}/>
        </Routes>
      </Box>
    )
  }
}
