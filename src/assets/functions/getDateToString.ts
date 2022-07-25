import {getFullDate} from "./getFullDate";

export function getDateToString(date: Date | string): string {
    let newDate: string | Date = new Date(date)
    return newDate = getFullDate(newDate.getMonth().toString()) + '/' + getFullDate(newDate.getDate().toString())
        + '  ' + getFullDate(newDate.getHours().toString()) + ':' + getFullDate(newDate.getMinutes().toString())
}