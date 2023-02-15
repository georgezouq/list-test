import moment, { Moment } from "moment";

export const diffTime = (time: Moment | string) => {
  if (!time) return ''
  let myTime: Moment = typeof time == "string" ? moment(time) : time;
  let nowTime = moment();
  let diff = moment.duration(myTime.diff(nowTime));
  
  let isBefore = myTime.isBefore(nowTime);
  let day = diff.days();
  let hour = diff.hours();
  let minute = diff.minutes();
  let second = diff.seconds();
  
  let ret: string[] = [];
  // 将负数变为正数
  function abs(num: number) {
    if (num < 0) {
      return Math.abs(num);
    }
    return num;
  }

  if (day != 0) ret.push(`${abs(day)} days`); 
  if (hour != 0) ret.push(`${abs(hour)} hours`);
  if (minute != 0) ret.push(`${abs(minute)} mins`);
  if (second != 0) ret.push(`${abs(second)} s`);

  return ret[0] + ' ago';
};
