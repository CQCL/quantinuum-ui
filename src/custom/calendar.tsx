import React, { Component } from 'react';

import {DateTime, Duration, Interval} from 'luxon'
import { cn } from 'src/utils';
import { Button } from 'src/shadcn/ui/button';

const events = [
    {start: DateTime.fromObject({month: 3, day: 7, year: 2025}), end: DateTime.fromObject({month: 3, day: 12, year: 2025,}),  eventInfo: {name: 'big thing!'}}
]


export const Calendar = () => {
    const [view, setView] = React.useState(DateTime.now())

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

        const goToNextMonth = () => {
            setView(view.plus({month: 1}))
        }
        const goToPreviousMonth = () => {
            setView(view.minus({month: 1}))
        }
        const goToCurrentMonth = () => {
            setView(DateTime.now())
        }

        const startOfMonth = view.startOf('month');
        const startOfCalendar = startOfMonth.minus({days: startOfMonth.weekday })


        const days = [...Array(42).fill(undefined)].map((_, idx) => {
            const day =  startOfCalendar.plus({days: idx});
            const eventsForDay = events.filter(event => {
                const eventInterval = Interval.fromDateTimes(event.start, event.end)
                return eventInterval.contains(day);
            })
            return {
                day: day.day,
                isInCurrentMonth: day.month === view.month,
                eventsForDay
            }
        })

    return (
      <div>
        <div>
          <h2>{months[view.month - 1]} {view.year}</h2>
          <Button variant='outline' onClick={goToPreviousMonth}>Previous</Button>
          <Button variant='outline' onClick={goToCurrentMonth}>Current</Button>
          <Button variant='outline' onClick={goToNextMonth}>Next</Button>
        </div>
        <div className='grid grid-cols-[repeat(7,9rem)] grid-rows-[2rem_repeat(6,7rem)] gap-px bg-muted  [&>*]:bg-background flex-shrink w-min border '>
          <>
            {
              weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </>

          {days.map((day) => {
                return <div className={cn(day.isInCurrentMonth ? '' : 'text-muted-foreground/50', 'hover:bg-muted transition p-2')}><p>{day.day}{day.eventsForDay.map(e => <div key={e.eventInfo.name} className="bg-red-600 p-3">{e.eventInfo.name}</div>)}</p></div>
              })}</div>
      </div>
    )

}
