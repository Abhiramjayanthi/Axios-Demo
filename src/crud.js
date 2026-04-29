import axios from 'axios';

async function getUsers() {
    const res=await axios.get('https://reqres.in/api/users',
        {
        headers:{'x-api-key':'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'}
        });
    console.log(res.data);
    console.log("Get Status",res.status);
}
getUsers();
async function postUser(){
    const payload= {
            name:"Abhi",
            job:"Tester"
        }
    const res=await axios.post('https://reqres.in/api/users',payload,
        {
            headers:{'x-api-key':'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'}
        }
    )
    console.log(res.data);
    console.log("Status",res.status);
    if(res.data.id){console.log("ID generated",res.data.id)};
    if(res.data.name===payload.name){console.log("Name Matched")};
    if(res.data.job === payload.job)(console.log("Job Matched"));
}
postUser();
async function updateUser(){
    const payload = {
        name:"Abhi Updated",
        job:"Automation Test Engineer"
        }
    const res=await axios.put('https://reqres.in/api/users/2',payload,
        {
        headers:{'x-api-key':'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'}
        },)
    console.log(res.status);
    console.log(res.data);
    let isMatch = true;
    for(let i in payload){
        if(res.data[i]!==payload[i]){
            isMatch = false;
            break;
        }
        }
        console.log(isMatch?"Matched":"Mismatch");
}
updateUser();
async function partialUpdate(){
    const res=await axios.put('https://reqres.in/api/users/2',
        {
            job:"Senior Automation Resource"
        },
        {
            headers:{'x-api-key':'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'}
        }
    );
    console.log(res.status);
    console.log(res.data);
}
partialUpdate();
async function deleteUser(){
    const res = await axios.delete('https://reqres.in/api/users/2',
        {
            headers:{'x-api-key':'free_user_3CzqKlMi8IdNZC15W6CBwQGvllW'}
        }

    );
    console.log("Deleted Status",res.status);
}
deleteUser();