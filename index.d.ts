declare module 'golden-colors' {
  export function getHsvGolden(s: number, v: number): WebColor;

  export function getHsvSimple(s: number, v: number): WebColor;

  export function getNaive(): WebColor;

  export interface WebColor {
    toRgb(): [number, number, number];

    toRgbString(): string;

    toHexString(): string;

    toString(): string;

    toJSON(): string;
  }
}
