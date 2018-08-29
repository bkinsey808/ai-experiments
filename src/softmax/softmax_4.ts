import * as tf from '@tensorflow/tfjs'

export const softmax = (logits: number[]) => {
  const a = tf.tensor1d(logits)
  return Array.from(tf.softmax(a).dataSync())
}
