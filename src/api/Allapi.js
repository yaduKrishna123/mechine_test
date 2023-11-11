// export const AddPolls=async(id,i)=>{
//     return await commonRequest("POST",`${Baseurl}/vote/${id}/${i}`)

// }
import { baseurl } from './Base_url';
import {commonRequest} from  './Commonrequest'

export const Allvlogs=async()=>{
    return await commonRequest(`POST`,`${baseurl}/posts`)
}