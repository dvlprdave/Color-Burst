import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

import MiniPalette from '../MiniPalette/MiniPalette'
import { Wrapper, Container, Nav, Palettes } from './PaletteListStyles'


const PaletteList = ({ palettes, deletePalette, history }) => {

  const [openDialog, setOpenDialog] = useState(false)
  const [deletingId, setdeletingId] = useState('')

  function goToPalette(id) {
    history.push(`/palette/${id}`)
  }

  function dialogToggle(id) {
    setOpenDialog(!openDialog)
    setdeletingId(id || '')
  }

  function handleDelete() {
    deletePalette(deletingId)
    dialogToggle()
  }
  return (
    <Wrapper>
      <Container>
        <Nav>
          <h1>Color Burst</h1>
          <Link to='/palette/new'>Create Palette</Link>
        </Nav>
        <Palettes>
          {/* 
            Component is null to prevent TransitionGroup 
            from rendering a div. This interferes with displaying
            Palettes otherwise.
          */}
          <TransitionGroup component={null}>
            {palettes.map(palette => (
              <CSSTransition
                key={palette.id}
                classNames='fade'
                timeout={500}
              >
                <MiniPalette
                  {...palette}
                  // handleClick={() => goToPalette(palette.id)}
                  handleClick={goToPalette}
                  handleDelete={dialogToggle}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Palettes>
      </Container>

      {/* Dialog for delete confirmation */}
      <Dialog
        open={openDialog}
        aria-labelledby='delete-dialog-title'
        onClose={dialogToggle}
      >
        <DialogTitle id='delete-dialog-title'>Delete This Palette</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: '#0f7a2a' }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' /> {/* primary = Text you want shown for your ListItem */}
          </ListItem>
          <ListItem button onClick={dialogToggle}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: '#d60c0c' }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Nervermind' />
          </ListItem>
        </List>
      </Dialog>
    </Wrapper >
  );
}

export default PaletteList;