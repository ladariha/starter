import React from "react";
import { Event } from "./pages/Event/Event";
import { UserRecord, DateRecord } from "./pages/VoteResults/VoteResults";

const App: React.FC = () => {

    const userRecords: UserRecord[] = [{ name: "Adam", answer: "yes" },
        { name: "Martan", answer: "no" },
        { name: "Ulrich", answer: "no" }];
    const dateRecords: DateRecord[] = [{ timestamp: "14.05.2024", record: userRecords },
        { timestamp: "15.05.2024", record: userRecords },
        { timestamp: "15.06.2024", record: userRecords }];
    return (
        <div>
            <h1>Event planner</h1>
            <Event title="Fasiangy" location="Bratislava" date={dateRecords}></Event>
            <Event title="Den-D" location="Brno" date={dateRecords}></Event>
            <Event title="Den-F" location="Brno" date={dateRecords}></Event>
        </div>
    );
};

export default App;
