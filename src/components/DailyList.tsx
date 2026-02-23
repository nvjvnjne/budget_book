import React from "react";
import type { Data } from "../types/data";
import "./DailyList.css";

interface Props {
  entries: Data[];
  handleDelete: (id: string) => void;
}

const DailyList = ({ entries, handleDelete }: Props) => {
  const groupedEntries: Record<string, Data[]> = entries.reduce(
    (acc, entry) => {
      if (!acc[entry.date]) {
        acc[entry.date] = [];
      }
      acc[entry.date].push(entry);
      return acc;
    },
    {} as Record<string, Data[]>,
  );

  const sortedDates = Object.keys(groupedEntries).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return (
    <>
      <div className="container">
        <div className="entryLists">
          <h2>履歴</h2>
          {sortedDates.map((date) => {
            const dairyEntries = groupedEntries[date];

            return (
              <div key={date} className="dailyLists">
                <div>
                  <h3 className="date">{date}</h3>
                  <ul>
                    {dairyEntries.map((entry) => (
                      <li key={entry.id}>
                        <div className="list-row">
                          <p>{entry.title}</p>
                          <p>¥{entry.amount.toLocaleString()}</p>
                          <p>{entry.type === "支出" ? "支出" : "収入"}</p>
                          <button className="deleteButton" onClick={() => handleDelete(entry.id)}>
                            削除
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DailyList;
