import React from "react";

// Conditionally show a warning dialog once a user has clicked DELETE button.
// Inside that dialog, dismiss the warning (i.e., remove the warning box from the screen) once a user has clicked PROCEED button4

import { useState } from "react";

export default function App() {
  const [showDialog, setshowDialog] = useState(false);

  return (
    <div>
      { showDialog && (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={(e) => setshowDialog(false)}>Proceed</button>
      </div>
      )}

      { !showDialog && (
      <button onClick={(e) => setshowDialog(true)}>Delete</button>
      )}
    </div>
  );
}
