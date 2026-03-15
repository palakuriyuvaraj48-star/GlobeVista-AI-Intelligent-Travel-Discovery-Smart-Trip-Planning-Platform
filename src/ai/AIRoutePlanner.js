export function generateRoute(tripData = []) {
  return tripData.map((step, index) => ({
    ...step,
    day: step.day || index + 1,
  }))
}

export default {
  generateRoute,
}
