let midiAccess: MIDIAccess;

export class SkippingServerRendering extends Error {
  static {
    this.prototype.name = "SkippingServerRendering";
  }
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export const useMIDI = () => {
  if (typeof window === "undefined") {
    throw new SkippingServerRendering("Skipping SSR");
  }

  if (!midiAccess) {
    throw window.navigator.requestMIDIAccess().then((access) => {
      midiAccess = access;
    });
  }

  return midiAccess;
};
