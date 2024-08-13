// Export a WeakMap instance
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  const count = weakMap.get(endpoint) || 0;

  // Update the count
  weakMap.set(endpoint, count + 1);

  // If the count reaches 5, throw an error
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
