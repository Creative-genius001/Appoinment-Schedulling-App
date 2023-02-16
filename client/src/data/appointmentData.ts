interface dataProp {
    id: String,
    name: String,
    date: String,
    time: String,
    isActive: Boolean
}

export const AppointmentData : dataProp[] = [
    {
        id: "UTKKENKNE87L",
        name: "Improve Stress Management",
        date: "13 May 2023",
        time: "12:00 - 12:30",
        isActive: true
    },
     {
        id: "LP0KKLO98E87L",
        name: "Full Body Checkup",
        date: "15 May 2023",
        time: "08:00 - 10:30",
        isActive: false
    }
]  