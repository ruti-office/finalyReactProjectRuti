import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import EditBD from './EditBD';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BD(props) {

  const { isAdmin } = props
  const [open, setOpen] = useState(false);
  const [BDDetails, setBDDetails] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    axios.get("http://localhost:8787/businessData")
      .then((res) => {
        if (res.status == 200)
          setBDDetails(res.data)
        console.log('הנתונים נטענו בהצלחה')
      })
      .catch((err) => {
        console.log('error')
      })
  }, [])
  return (
    <>
      {
        isAdmin ?
          JSON.stringify(BDDetails) == '{}' ?
            < div style={{ margin: '40px', fontSize: '24px' }}> נא עדכן את פרטי העסק</div>
            :
            <div style={{ textAlign: 'center' }}>
              <h1>{BDDetails.name}</h1>
              <h2>{BDDetails.address}</h2>
              <h2>{BDDetails.phone}</h2>
            </div>
          :
          JSON.stringify(BDDetails) == '{}' ?
            <div style={{ margin: '40px', fontSize: '24px' }}>האתר בתחזוקה - פרטי העסק לא מעודכנים ): </div>
            :
            <div style={{ textAlign: 'center' }}>
              <h1>{BDDetails.name}</h1>
              <h2>{BDDetails.address}</h2>
              <h2>{BDDetails.phone}</h2>
            </div>
      }
      {
        isAdmin ?
          <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
            <EditIcon />
          </Fab>
          :
          <></>
      }
      <EditBD openDialog={open} setOpenDialog={setOpen} setBDDetails={setBDDetails} />
    </>
  )
}

export default BD