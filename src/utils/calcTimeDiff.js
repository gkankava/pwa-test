export const calcTimeDiff = (dateStr) => {
  if (dateStr) {
    let formatted = dateStr
      .replace(" ", "-")
      .replace(":", "-")
      .replace(":", "-");
    let splitted = formatted.split("-");
    let date1 = new Date(
      splitted[0],
      splitted[1] - 1,
      splitted[2],
      splitted[3],
      splitted[4],
      splitted[5]
    );
    let dateNow = Date.now();
    let td = dateNow - date1.getTime();
    let dd = td / (1000 * 60 * 60 * 24);
    return dd;
  }
};
