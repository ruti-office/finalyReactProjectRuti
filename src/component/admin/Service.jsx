
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { observer } from 'mobx-react';
import ServiceStore from '../../stores/serviceStore';


const Service = (observer((props) => {
  const { openServiceModal, setCloseModal } = props
  const [subject, setSubject] = useState()
  const [describe, setDescribe] = useState()
  const [price, setPrice] = useState()
  const [duration, setDuration] = useState()
  const handleClose = () => {
    setCloseModal(false);
  };

  return (
    <>
      <Dialog
        open={openServiceModal}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            ServiceStore.addService({ "name": subject, "description": describe, "price": price, "duration": duration })
            handleClose();
          },
        }}
      >
        <DialogTitle>הוספת שירות</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField onChange={(e) => setSubject(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="מקצוע"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => setDescribe(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="discribe"
            name="discribe"
            label="תאור"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => setPrice(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="מחיר"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => setDuration(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="duration"
            name="duration"
            label="משך זמן השיעור"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit" >הוספה</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}))

export default Service