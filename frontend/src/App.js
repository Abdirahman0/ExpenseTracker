import BackendData from "./BackendData"; // Fetches backend data
import React, { useState } from "react";
import { ShiftForm } from "./ShiftForm";
import { ShiftList } from "./ShiftList";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

function App() {
  const [shifts, setShifts] = useState([]);

  const addShift = (shift) => {
    setShifts([...shifts, { ...shift, date: new Date(shift.date) }]);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Shift Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <ShiftForm onAddShift={addShift} />
          <ShiftList shifts={shifts} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
