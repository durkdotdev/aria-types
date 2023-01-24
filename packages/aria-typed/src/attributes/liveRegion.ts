export type AriaAttributesLiveRegion = {
  "aria-busy"?: "false" | "true";
  "aria-live"?: "assertive" | "off" | "polite";
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text";
  "aria-atomic"?: "false" | "true";
};

export type AriaAttributeLiveRegion = keyof AriaAttributesLiveRegion;

export const ariaAttributesLiveRegion = [
  "aria-busy",
  "aria-live",
  "aria-relevant",
  "aria-atomic"
] as AriaAttributeLiveRegion[];