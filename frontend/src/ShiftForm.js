import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export function ShiftForm({ onAddShift }) {
  const [shift, setShift] = useState({
    date: "",
    startTime: "",
    endTime: "",
    breakHours: 0,
    isBreakPaid: false,
    holidayPayPercentage: 0,
    rate: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShift((prevShift) => ({
      ...prevShift,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddShift(shift);
    setShift({
      date: "",
      startTime: "",
      endTime: "",
      breakHours: 0,
      isBreakPaid: false,
      holidayPayPercentage: 0,
      rate: 0,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Shift</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input type="date" name="date" value={shift.date} onChange={handleChange} required />
          <Input type="time" name="startTime" value={shift.startTime} onChange={handleChange} required />
          <Input type="time" name="endTime" value={shift.endTime} onChange={handleChange} required />
          <Input type="number" name="breakHours" value={shift.breakHours} onChange={handleChange} min="0" />
          <label>
            <input type="checkbox" name="isBreakPaid" checked={shift.isBreakPaid} onChange={handleChange} />
            Paid Break
          </label>
          <label>
              <Input type="number" name="holidayPayPercentage" value={shift.holidayPayPercentage} onChange={handleChange} min="0" />
              holiday Pay Percentage
          </label>
          <Input type="number" name="rate" value={shift.rate} onChange={handleChange} min="0" required />
          <Button type="submit">Add Shift</Button>
        </form>
      </CardContent>
    </Card>
  );
}
