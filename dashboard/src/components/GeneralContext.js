import React, { useState } from "react";

import ActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openActionWindow: (uid, mode) => {},
  closeActionWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isActionWindowOpen, setIsActionWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
const [actionMode, setActionMode] = useState("");

  const handleOpenActionWindow = (uid, mode) => {
  setIsActionWindowOpen(true);
  setSelectedStockUID(uid);
  setActionMode(mode);
};

  const handleCloseActionWindow = () => {
  setIsActionWindowOpen(false);
  setSelectedStockUID("");
  setActionMode("");
};

  return (
    <GeneralContext.Provider
      value={{
        openActionWindow: handleOpenActionWindow,
closeActionWindow: handleCloseActionWindow,
      }}
    >
      {props.children}
      {isActionWindowOpen && (
  <ActionWindow uid={selectedStockUID} mode={actionMode} />
)}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;