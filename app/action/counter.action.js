export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  console.log("Running increment action")
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  console.log("Running decrement action")
  return {
    type: DECREMENT_COUNTER
  };
}
