import React,{use,useEffect,useState} from 'react'

import Service from '../utils/http'
import { Avatar, Text } from '@mantine/core';
import { Stack, Button } from '@mantine/core';
const service =new Service();
export default function Profile() {
    const[profileData, setProfileData]=useState(null);
    async function getProfileData() {
        let data=await service.get("user/me");
        setProfileData(data);
        console.log(data);
        
    }

    useEffect( ()=>{
        getProfileData();
    }, [])// [] , 

  return (
    <container size={"sm"}>
     <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
    
      <Avatar radius="xl" size="xl"src={profileData?.avatar} alt="it's me"/>
      
      <Text tt="uppercase"><strong>UserName:</strong>{profileData?.name}</Text>
      <Text tt="uppercase"><strong>Email:</strong>{profileData?.email}</Text>
      

    </Stack>
    </container>
  )
}
