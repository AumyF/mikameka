"use client";

import { FC, Suspense } from "react";
import { MIDI } from "../(midi)/midi";

export const Hoge: FC = () => <Suspense fallback={<div>Fallback</div>}>
  <MIDI></MIDI>
</Suspense>
