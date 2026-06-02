import { set } from "date-fns";
import { create } from "zustand";
const authstore = ()=>(create(persist((set)=>({
    user:null,isHydrated:false,
    login:(userdata)=>set({user:userdata }),
    setHydrated:()=>set({isHydrated:true})
})
,{
    name:"auth-storage",onRehydrateStorage:()=>(state)=>{
        if(state) state.setHydrated()
    }

}
)))
export default authstore