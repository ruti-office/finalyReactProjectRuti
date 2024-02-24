import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


export default function EditBD(props) {
  const { openDialog, setOpenDialog, setBDDetails } = props
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            handleClose();
            axios.post("http://localhost:8787/businessData", formJson)
              .then((res) => {
                if (res.status === 200) {
                  setBDDetails(res.data)
                  alert('הנתונים התעדכנו בהצלחה')
                }
              })
              .catch(err => console.log('שגיאה בעדכון הנתונים'))

          },
        }}
      >
        <DialogTitle>עריכת פרטי העסק</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="שם"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="address"
            name="address"
            label="מייל"
            type="mail"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            name="phone"
            label="נייד"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>בטל שינויים</Button>
          <Button type="submit">עדכן שינויים</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}