import * as React from 'react';
import Button from '@mui/material/Button';
import BD from "../admin/BD"
import ServicesList from "../admin/ServicesList"
import { useState } from 'react';
import Meeting from '../admin/Meeting';


function UserHome() {
  const [openNewMeeting, setOpenNewMeeting] = useState(false);

  return (
    <>
      <BD isAdmin={false} />
      <div> <Button variant="outlined" size="medium" onClick={() => { setOpenNewMeeting(true) }}>
        לקביעת שיעור
      </Button>
      </div>
      <Meeting y={openNewMeeting} z={setOpenNewMeeting} />
      <ServicesList showAddService={false} />
    </>
  )
}


export default UserHome