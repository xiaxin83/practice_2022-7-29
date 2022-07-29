export function formatDate(date) {
  if (date != "" && date != undefined && date != null) {
    date = new Date(date);
    let year = date.getFullYear();
    let Month = date.getMonth() + 1;
    Month = Month < 10 ? "0" + Month : Month;
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    return year + "年" + Month + "月" + day + "日 " + hours + ":" + min;
  } else {
    return "";
  }
}
