import { sum } from '../sum'
/**
 * logit: (logistic unit) the vector of raw (non-normalized) predictions that
 * a classification model generates, which is ordinarily then passed to a normalization function.
 * If the model is solving a multi-class classification problem,
 * logits typically become an input to the softmax function.
 * The softmax function then generates a vector of (normalized) probabilities
 * with one value for each possible class.
 *
 * For Tensorflow: this Tensor is the quantity that is
 * being mapped to probabilities by the Softmax
 */

// i like this version. clear and efficient
export const softmax = (logits: number[]) => {
  const exponents = logits.map(Math.exp)
  const total = sum(exponents)
  return exponents.map(exp => exp / total)
}

// a^(b - c) = (a^b)/(a^c)

// see https://medium.com/@uniqtech/understand-the-softmax-function-in-minutes-f3a59641e86d
