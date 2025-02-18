import React from "react";
import "./styles.css";

export type UserRecord = {
    name: string;
    answer: "yes" | "no" | "if-needed";
};

export type DateRecord = {
    timestamp: string;
    record: UserRecord[];
};

export const VoteResults: React.FC<DateRecord> = ({ timestamp, record }) => {

    return (
        <div className="vote-result">
            <h4>{timestamp}</h4>
            {record.map((item) => (
                <div key={item.name}>{item.name} ({item.answer})</div>
            ))}
        </div>
    );
};
