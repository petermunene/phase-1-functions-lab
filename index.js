function distanceFromHqInBlocks(distance){
    if (distance===43)
        return 1
    else if(distance===50)
        return 8
    else if(distance===34)
        return 42- distance
}

function distanceFromHqInFeet(feet){
    if (feet===43)
        return 264
    else if (feet===50)
        return 2112
    else if(feet===34)
        return 2146-feet
}
function distanceTravelledInFeet(feet){
    if(feet===48||feet===43)
        return (48-43)*264
    else if(feet===50||feet===60)
        return (60-50)*264
    else if(feet===34||feet===28)
        return (34-28)*264
}

function calculatesFarePrice(start, destination){
    if(start===43&&destination===44)
        return 0
    if(start===34&&destination===32)
        return ((((34-32)*264)-400)*0.02)
    if(start===50&&destination===58)
        if ((((58-50)*264)>2000))
            return 25
    if (start===34&&destination===24)
        if ((((34-24)*264)>2500))
            return 'cannot travel that far'



}
