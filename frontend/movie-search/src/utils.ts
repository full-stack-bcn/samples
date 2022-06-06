export const getYear = (fullDate: string | null) => {
  return fullDate?.split("-")[0];
};
