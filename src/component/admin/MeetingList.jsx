import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { observer } from 'mobx-react';
import MeetingStore from '../../stores/meetingStore';
import ServiceStore from '../../stores/serviceStore';


const MeetingList = observer(() => {
  const checkDate = (dateToCheck) => {
    const currentDate = new Date();
    var today = new Date();
    var y = new Date();
    var sevenDaysFromNow = new Date(y.setDate(today.getDate() + 7));


    if (dateToCheck >= currentDate && dateToCheck <= sevenDaysFromNow) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {
        MeetingStore.meetingList.map((i) => {
          return <Card variant="soft" style={{
            margin: "3px", display: "inline-block", width: '300px',
            border: `2px solid ${new Date(i.dateTime).getDate() === new Date().getDate() ? 'red' : checkDate(new Date(i.dateTime)) === true ? 'yellow' : 'green'}`
          }}
          >
            <CardContent >
              <Typography level="title-md"  >{i.name}</Typography>
              <Typography>{i.dateTime}</Typography>
              <Typography>{i.clientName}</Typography>
              <Typography>{i.clientPhone}</Typography>
              <Typography>{i.clientEmail}</Typography>
            </CardContent>
          </Card>
        })
      }
    </>
  )
})



export default MeetingList