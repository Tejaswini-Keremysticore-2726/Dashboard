
import React, { useMemo, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs);

export default function CalendarPage() {
  const [events, setEvents] = useState(() => [
    {
      title: "Demo Event",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const defaultDate = useMemo(() => new Date(), []);

  return (
    <div className="min-h-screen w-full flex justify-center px-3 py-6 sm:px-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Calendar</h1>

        {/* Responsive calendar container */}
        <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] w-full">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            defaultDate={defaultDate}
            selectable
            onSelectSlot={(slotInfo) => {
              const title = window.prompt("Event title?");
              if (!title) return;

              setEvents((prev) => [
                ...prev,
                {
                  title,
                  start: slotInfo.start,
                  end: slotInfo.end,
                },
              ]);
            }}
            onSelectEvent={(event) => alert(event.title)}
          />
        </div>
      </div>
    </div>
  );
}
