import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import MeetingStore from '../../stores/meetingStore';
import ServiceStore from '../../stores/serviceStore';


function Meeting(props) {
 
  const openNewMeeting = props.y;
  const setOpenNewMeeting = props.z;
  const [serviceType, setServiceType] = useState();
  const [dateTime, setDateTime] = useState();
  const [clientName, setClientName] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [clientEmail, setClientEmail] = useState();
  const handleClose = () => {
    setOpenNewMeeting(false);
  };
  const checkDate = (date) => {
    const currentDay = new Date();
    if (new Date(date) >= currentDay) {
      setDateTime((date))
    } else {
      alert('התארייך לא חוקי')
      setDateTime('')
    }
  }

  return (
    <>

      <Dialog
        open={openNewMeeting}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
            MeetingStore.addMeeting({
              "serviceType": serviceType, "dateTime": dateTime, "clientName": clientName, "clientPhone": clientPhone, "clientEmail": clientEmail

            })
          },
        }}
      >
        <DialogTitle>הוספת שיעור</DialogTitle>
        <DialogContent >
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              מקצוע
            </InputLabel>
            <NativeSelect
              onChange={(e) => setServiceType(e.target.value)}
              defaultValue=''
              inputProps={{
                name: 'serviceType',
                id: 'serviceType',
              }}
            >
              {ServiceStore.serviceList.map((i) => {
                return (
                  <option value={i.id}>{i.name}</option>)
              })}
            </NativeSelect>
          </FormControl>
          <TextField onChange={(e) => { checkDate(e.target.value) }}
            autoFocus
            required
            margin="dense"
            id="dateTime"
            name="dateTime"
            value={dateTime}
            label="תאריך ושעה"
            type="datetime-local"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => { setClientName(e.target.value) }}
            autoFocus
            required
            margin="dense"
            id="clientName"
            name="clientName"
            label="שם מלא"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => { setClientPhone(e.target.value) }}
            autoFocus
            required
            margin="dense"
            id="clientPhone"
            name="clientPhone"
            label="טלפון"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e) => { setClientEmail(e.target.value) }}
            autoFocus
            required
            margin="dense"
            id="clientEmail"
            name="clientEmail"
            label="מייל"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">הוספה</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}





export default Meeting