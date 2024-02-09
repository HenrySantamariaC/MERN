import React, { useState } from 'react';

const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const prevMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    };

    const handleDayClick = (day) => {
        const newSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
        setSelectedDate(newSelectedDate);
    };

    const renderCalendar = () => {
        const days = [];
        const daysCount = daysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
        const firstDayIndex = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

        for (let i = 0; i < firstDayIndex; i++) {
            days.push(<div key={`empty-${i}`} className="flex items-center justify-center w-1/7"></div>);
        }

        for (let day = 1; day <= daysCount; day++) {
            days.push(
                <div
                    key={`day-${day}`}
                    className={`flex items-center justify-center w-1/7 cursor-pointer ${selectedDate.getDate() === day ? 'bg-blue-500 text-white' : ''
                        }`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="w-64">
            <div className="flex items-center justify-between mb-4">
                <button className="p-1" onClick={prevMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div>
                    {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
                </div>
                <button className="p-1" onClick={nextMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                <div className="text-center">Sun</div>
                <div className="text-center">Mon</div>
                <div className="text-center">Tue</div>
                <div className="text-center">Wed</div>
                <div className="text-center">Thu</div>
                <div className="text-center">Fri</div>
                <div className="text-center">Sat</div>
                {renderCalendar()}
            </div>
        </div>
    );
};

export default CalendarPicker;
