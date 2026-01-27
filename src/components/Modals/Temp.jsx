import React, { useState } from "react";

import RestrictionPopUp from "./components/modals/RestrictionPopUp";

function App() {
  
  const [showRestriction, setShowRestriction] = useState(false)

  return (
    <div className="h-screen bg-amber-100 flex flex-col items-center justify-center">
        
        <button className='text-white bg-amber-900 rounded mt-4 p-2 m-10' onClick={()=> setShowRestriction(true)}>After one star</button>
        {showRestriction && <RestrictionPopUp onClose={() => setShowRestriction(false)} />}
        
    </div>
  );
};

export default App;
