import { sum } from '../sum'

// this version is supposedly better for numerical stability, but i don't understand why
export const softmax = (logits: number[]) => {
  const C = Math.max(...logits)
  const d = sum(logits.map(y => Math.exp(y - C)))
  return logits.map(value => Math.exp(value - C) / d)
}
