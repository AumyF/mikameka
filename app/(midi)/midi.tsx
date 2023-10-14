"use client";

import { useMIDI } from "./use-midi";

export const MIDI: React.FC = () => {
  const midiAccess = useMIDI();

  return [...midiAccess.outputs.values()].map((output) => (
    <div key={output.id}>{output.name}</div>
  ));
};
