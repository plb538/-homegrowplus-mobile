export class TimeFormatter{
    public static getPrettyString(input : number){
        let date = new Date(0);
        date.setMilliseconds(input);
        //return date.getDate() + "/" + date.getMonth()  + '/' + date.getFullYear() + "-" + date.getHours() + ":" +  date.getMinutes();
        return date.toLocaleString();
    }
}