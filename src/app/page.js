'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
// import Image from "next/image";
import {Button} from '@nextui-org/button'; 
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <>
      <ThemeSwitcher />
      <Button color='primary'>sdf</Button>

      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    <Button variant='flat' color='primary'>sdf</Button>
    <p>ADASDA</p>
    </>
    
  );
}
