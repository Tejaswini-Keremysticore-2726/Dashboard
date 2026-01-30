



import React, { useMemo, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

// ✅ localizer
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
    <div className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>

      <div style={{ height: "75vh" }}>
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
          onSelectEvent={(event) => {
            alert(event.title);
          }}
        />
      </div>
    </div>
  );
}
