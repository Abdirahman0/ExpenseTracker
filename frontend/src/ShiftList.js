import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export function ShiftList({ shifts }) {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4">Shift History</h2>
      {shifts.length === 0 ? (
        <p>No shifts added yet.</p>
      ) : (
        shifts.map((shift, index) => {
          const basePayForShift = shift.hours * shift.rate;
          const holidayPayAmount = (basePayForShift * shift.holidayPayPercentage) / 100;
          const totalPay = (shift.hours - shift.breakHours) * shift.rate * (1 + shift.holidayPayPercentage / 100);

          return (
            <Card key={index} className="mt-2">
              <CardHeader>
                <CardTitle>Shift on {shift.date.toDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hours: {shift.hours}</p>
                <p>Break: {shift.breakHours} hour(s) {shift.isBreakPaid ? "(Paid)" : "(Unpaid)"}</p>
                <p>Holiday Pay: {shift.holidayPayPercentage}% (£{holidayPayAmount.toFixed(2)})</p>
                <p>Rate: £{shift.rate}/hour</p>
                <p className="font-bold mt-2">Total Pay: £{totalPay.toFixed(2)}</p>
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
}
