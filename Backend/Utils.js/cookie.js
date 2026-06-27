export const getAccessCookieOptions = ()=>({
httpOnly:true,sameSite:'none',secure:true,maxAge:15*60*1000
})
export const getRefreshCookieOptions = ()=>({
httpOnly:true,sameSite:'none',secure:true,maxAge:7*60*60*1000
})