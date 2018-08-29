import { sum } from '../sum'

// inefficient because it calculates the sum multiple times
export const softmax = (logits: number[]) =>
  logits.map(value => Math.exp(value) / sum(logits.map(Math.exp)))
