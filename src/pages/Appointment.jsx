import * as React from 'react';
import {
    AppointmentModel,
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

const appointments = [
    {
        id: 1,
        title: 'John Doe',
        startDate: new Date(2023, 2, 22, 10, 0),
        endDate: new Date(2023, 2, 22, 11, 0),
        location: 'Room 1',
    },
    {
        id: 2,
        title: 'Jane Doe',
        startDate: new Date(2023, 2, 24, 14, 0),
        endDate: new Date(2023, 2, 24, 15, 0),
        location: 'Room 2',
    },
];

const Appointment = () => (
    <Scheduler data={appointments}>
        <ViewState defaultCurrentDate={new Date()} />
        <WeekView startDayHour={9} endDayHour={18} />
        <Appointments />
    </Scheduler>
);

export default Appointment;