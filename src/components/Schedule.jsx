import * as React from 'react';
import { AppointmentModel, Scheduler, DayView, Appointments, AppointmentTooltip, DateNavigator, TodayButton, Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { makeStyles } from '@material-ui/core/styles'; // Import makeStyles from @material-ui/core/styles

const appointments = [
    {
        id: 1,
        title: 'John Doe',
        startDate: new Date(2023, 2, 23, 10, 0),
        endDate: new Date(2023, 2, 23, 11, 0),
        problem: 'b',
        location: 'Room 412',
    },
    {
        id: 2,
        title: 'Marry Jones',
        startDate: new Date(2023, 2, 23, 14, 0),
        endDate: new Date(2023, 2, 23, 16, 0),
        problem: 'с',
        location: 'Room 521',
    },
    {
        id: 3,
        title: 'Daniel White',
        startDate: new Date(2023, 2, 24, 12, 0),
        endDate: new Date(2023, 2, 24, 13, 30),
        problem: 'A',
        location: 'Room 221',
    },
];

// // Define styles using makeStyles
// const useStyles = makeStyles((theme) => ({
//     tooltip: {
//         backgroundColor: '#2196f3',
//         color: '#fff',
//         padding: '10px',
//         borderRadius: '5px',
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: '18px',
//         marginBottom: '5px',
//     },
//     date: {
//         marginBottom: '5px',
//     },
//     problem: {
//         marginBottom: '5px',
//     },
//     location: {
//         marginBottom: '5px',
//     },
// }));

// const AppointmentTooltipContent = ({ appointmentData }) => {
//     const classes = useStyles();

//     return (
//         <div className={classes.tooltip}>
//             <div className={classes.title}>{appointmentData.title}</div>
//             <div className={classes.date}>
//                 {appointmentData.startDate.toLocaleString()} - {appointmentData.endDate.toLocaleString()}
//             </div>
//             <div className={classes.problem}>Problem: {appointmentData.problem}</div>
//             <div className={classes.location}>Room: {appointmentData.location}</div>
//         </div>
//     );
// };

const Schedule = () => (
    <Scheduler data={appointments}>
        <ViewState defaultCurrentDate={new Date()} />
        <DayView startDayHour={9} endDayHour={18} intervalCount={9} />
        <Appointments />
        <AppointmentTooltip />
        {/* contentComponent={AppointmentTooltipContent} */}
        <Toolbar />
        <TodayButton />
        <DateNavigator />
    </Scheduler>
);

export default Schedule;
