import React, { useEffect } from 'react';
type Props = {
    city: string, 
    zone: string
}
const Timer: React.FC<Props> = ({city, zone}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, 1000);
    }, [])
    
    return <div>
        <h1>{city}</h1>
        <label style={{fontSize: "40px"}}>{time.toLocaleTimeString('en-US', {timeZone: zone, timeZoneName: "short"})}</label>
    </div>
}
export default Timer;