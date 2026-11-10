export const getGuestId  = ()=>{
    const guestId = localStorage.getItem('guestId')
    if(guestId){
return guestId
    }
    const newGuestId = crypto.randomUUID()
    localStorage.setItem('guestId',newGuestId)
    return newGuestId
}