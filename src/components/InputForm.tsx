import React, { useState } from "react";
import type { Data, entry } from "../types/data";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import "./InputForm.css";

type Props = {
  add: (data: Data) => void;
};

const InputForm = ({ add }: Props) => {
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<entry>("支出");

  const parsedAmount = Number(amount);
  if (isNaN(parsedAmount)) return;

  const inputData: Data = {
    id: uuid(),
    title,
    amount: parsedAmount,
    type,
    date,
  };

  const navigate = useNavigate();
  const handleAdd = () => {
    if (!title || !amount || !date || !type) return;
    add(inputData);
    navigate("/");
  };
  return (
    <>
      <div className="inputContainer">
        <div className="input-cluster">
          <h2>入力項目</h2>
          <div className="inputData">
            <div className="selectType">
              <select
                value={type}
                onChange={(e) => setType(e.target.value as entry)}
              >
                <option value="支出">支出</option>
                <option value="収入">収入</option>
              </select>
            </div>
            <div className="title">日付</div>
            <div className="inputDate">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="title">タイトル</div>
            <div className="inputTitle">
              <input
                type="text"
                placeholder="内容を入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="title">金額</div>
            <div className="inputAmount">
              <input
                type="number"
                placeholder="金額"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button type="button" onClick={handleAdd}>
            追加
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default InputForm;
