import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view"
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Page = async() => {
 

    return <HomeView /> 
}  
 
export default Page;