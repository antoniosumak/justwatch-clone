import moment from "moment";

export const getYearFromDate = (date: string) : string=>{
    return moment(date).format("YYYY");
}

export const convertMinutesIntoHoursAndMinute = (minutes: number) : string => {
    let hours = Math.trunc(minutes/60);
    let leftoverMinutes = minutes % 60;
    return `${hours}h ${leftoverMinutes}min`;
}