import React from "react";
import ScriptSynopsis from "../fisrt_half/ScriptSynopsis";

export default function Scripts() {
  return (
    <div className="w-full px-4 sm:px-0">
      {/* The toggle functionality and the useState hook for showSynopsis
        have been completely removed.
        The ScriptSynopsis component is now rendered unconditionally.
      */}
      <ScriptSynopsis />
    </div>
  );
}