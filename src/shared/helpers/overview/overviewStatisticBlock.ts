export function getCurrentAgeText(yearsDifference: number) {
  if (yearsDifference > 0) {
    return "in " + yearsDifference.toString() + " years";
  } else if (yearsDifference === 0) {
    return "this year";
  } else if (yearsDifference === -1) {
    return "last year";
  } else return Math.abs(yearsDifference).toString() + " years ago";
}
