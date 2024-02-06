import React from 'react'

import { ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

import { scheduleData } from '../data/dummy'

import { Header } from '../components'

const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Apps" title="Calendar" />
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender