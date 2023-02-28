interface dataProp {
    id: String,
    name: String,
    date: String,
    time: String,
    isActive: Boolean
    description: String
}

export const AppointmentData : dataProp[] = [
    {
        id: "UTKKENKNE87L",
        name: "Improve Stress Management",
        date: "13 May 2023",
        time: "12:00 - 12:30",
        isActive: true,
        description: "Mauris, erat et. Donec, sociosqu aliquet. Sed nascetur. Nullam facilisis laoreet etiam magnis tincidunt class. Adipiscing vestibulum cursus metus facilisi venenatis. Interdum dui ligula. Ornare conubia pulvinar leo integer facilisis blandit elementum nostra. Blandit feugiat. Purus. Amet vulputate ridiculus taciti Varius dictumst et dapibus nulla ullamcorper vestibulum est purus ante."
    },
     {
        id: "LP0KKLO98E87L",
        name: "Full Body Checkup",
        date: "15 May 2023",
        time: "08:00 - 10:30",
        isActive: false,
        description: "A. Eget primis curabitur dapibus habitant conubia malesuada. Blandit scelerisque libero mattis. Dolor adipiscing sagittis dignissim lobortis fringilla cursus eu. Nunc, erat urna, sociis augue arcu netus lacinia vitae iaculis."
    }
]  