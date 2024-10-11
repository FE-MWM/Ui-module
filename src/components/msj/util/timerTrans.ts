export const numberArrToStringTime =(numberArr:number[])=>{
 const stringArr = numberArr.map(num => {
    if(num < 10){
        return '0'+ num
    }else{
        return String(num)
    }
 })
 return stringArr.join(':')
}

export const stringTimeToNumberArr = (stringTime:string)=>{
let [h,mm,ss] = stringTime.split(':').map(str=>+str);

if(ss===99){
    ss = 0;
    mm += 1;
}else{
    ss += 1;
}

if(mm === 60){
    mm = 0;
    h += 1;
}

return [h,mm,ss]
}