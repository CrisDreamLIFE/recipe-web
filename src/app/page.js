'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from "next/image";
import {Button} from '@nextui-org/button'; 

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <main>
      <Button color='primary'>sdf</Button>    
    </main>
    
  );
}
