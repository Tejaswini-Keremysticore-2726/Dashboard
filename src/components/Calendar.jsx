import React, { useMemo, useState } from "react";

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export default function Calendar({
  value,
  onChange,
  weekStartsOn = 0, // 0 = Sunday, 1 = Monday
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewDate, setViewDate] = useState(() => startOfDay(value ?? new Date()));
  const selected = value ? startOfDay(value) : null;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthName = useMemo(
    () =>
      viewDate.toLocaleString(undefined, {
        month: "long",
        year: "numeric",
      }),
    [viewDate]
  );

  const grid = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1);
    const lastDay = daysInMonth(year, month);

    // Convert JS Sunday-based day to weekStartsOn offset
    const rawWeekday = firstOfMonth.getDay(); // 0..6
    const leading =
      (rawWeekday - weekStartsOn + 7) % 7; // number of blank cells before day 1

    const cells = [];

    // leading blanks (previous month)
    for (let i = 0; i < leading; i++) cells.push(null);

    // current month days
    for (let day = 1; day <= lastDay; day++) {
      cells.push(new Date(year, month, day));
    }

    // trailing blanks to fill 6 rows (42 cells) for stable height
    while (cells.length < 42) cells.push(null);

    // chunk into weeks
    const weeks = [];
    for (let i = 0; i < 42; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }, [year, month, weekStartsOn]);

  const weekdayLabels = useMemo(() => {
    const base = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return base.slice(weekStartsOn).concat(base.slice(0, weekStartsOn));
  }, [weekStartsOn]);

  const goPrev = () => setViewDate(startOfDay(new Date(year, month - 1, 1)));
  const goNext = () => setViewDate(startOfDay(new Date(year, month + 1, 1)));
  const goToday = () => setViewDate(today);

  const selectDay = (d) => {
    if (!d) return;
    onChange?.(startOfDay(d));
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <button type="button" onClick={goPrev} style={styles.navBtn} aria-label="Previous month">
          ‹
        </button>

        <div style={styles.titleWrap}>
          <div style={styles.title}>{monthName}</div>
          <button type="button" onClick={goToday} style={styles.todayBtn}>
            Today
          </button>
        </div>

        <button type="button" onClick={goNext} style={styles.navBtn} aria-label="Next month">
          ›
        </button>
      </div>

      <div style={styles.weekdays}>
        {weekdayLabels.map((w) => (
          <div key={w} style={styles.weekday}>
            {w}
          </div>
        ))}
      </div>

      <div style={styles.grid}>
        {grid.flat().map((d, idx) => {
          const isToday = d && isSameDay(d, today);
          const isSelected = d && selected && isSameDay(d, selected);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => selectDay(d)}
              disabled={!d}
              style={{
                ...styles.cell,
                ...(d ? {} : styles.cellDisabled),
                ...(isToday ? styles.cellToday : {}),
                ...(isSelected ? styles.cellSelected : {}),
              }}
            >
              {d ? d.getDate() : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: 360,
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 14,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  titleWrap: { flex: 1, textAlign: "center" },
  title: { fontSize: 16, fontWeight: 700, lineHeight: 1.2 },
  todayBtn: {
    marginTop: 4,
    fontSize: 12,
    border: "1px solid #e5e7eb",
    background: "white",
    borderRadius: 999,
    padding: "4px 10px",
    cursor: "pointer",
  },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    fontSize: 18,
    lineHeight: "34px",
  },
  weekdays: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 6,
    marginBottom: 6,
  },
  weekday: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    padding: "6px 0",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 6,
  },
  cell: {
    height: 42,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    fontSize: 14,
  },
  cellDisabled: {
    border: "1px dashed #e5e7eb",
    background: "#fafafa",
    cursor: "default",
  },
  cellToday: {
    border: "2px solid #111827",
  },
  cellSelected: {
    background: "#111827",
    color: "white",
    border: "2px solid #111827",
  },
};
