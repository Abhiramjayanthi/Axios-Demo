import axios from 'axios';
import type { AxiosResponse } from 'axios';
type User={
    id: number;
    first_name:string;
    last_name:string;
    job:string;
}

//common header
const headers = {'x-api-key': 'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'};
//GET
async function getUsers() {
    const res : AxiosResponse =await axios.get('https://reqres.in/api/users',{headers});
    console.log(res.data);
    console.log(res.status);

}
getUsers();
//POST
async function postUser(){
    const payload :User= {
            first_name:"Abhiram",
            last_name:"Jayanthi",
            job:"Tester"
        }
    const res:AxiosResponse=await axios.post('https://reqres.in/api/user',payload,{headers});
    console.log(res.data);
    console.log(res.status);
}
postUser();
//update
async function updateUser(){
    const payload : User={
        first_name:"Abhi Updated",
        job:"Senior Automation test engineer"
    }
    const res : AxiosResponse = await axios.put('https://reqres.in/api/users/2',payload,{headers});
    console.log(res.data);
    console.log(res.status);      
    let isMatch =true;
    for(let i in payload){
        const key = i as keyof User;
        if(res.data[key]!==payload[key]){
            isMatch=false;
            break;
        }
    }
    console.log(isMatch?"Matched":"Unmatched");
}
updateUser();
async function partialUpdate() {
    const payload : User={
        job:"Automation Test Engineer"
    }
    const res : AxiosResponse=await axios.put('https://reqres.in/api/users/2',payload,{headers});
    console.log(res.status);
    console.log(res.data);

}
partialUpdate();
//delete user
async function deleteUser() {
    const res : AxiosResponse=await axios.delete('https://reqres.in/api/users/2',{headers});
    console.log(res.data);
    console.log(res.status);
}