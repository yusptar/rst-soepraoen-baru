import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
dayjs.locale("id");

export const formatDate = (date) => {
  if (dayjs().diff(dayjs(date), "day") > 7) {
    return dayjs(date).format("DD MMMM YYYY");
  } else {
    return dayjs(date).fromNow();
  }
};
