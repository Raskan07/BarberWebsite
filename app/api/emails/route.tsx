import Email from '@/app/components/ui/email-template';
import { Resend } from 'resend';
import {NextResponse} from "next/server"

const resend = new Resend("re_6HRWF7aH_6Tpd31qQ4y959TCYreHZzMK2");

export async function POST(){
  try{

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mokpok67@gmail.com'],
      subject: 'Wellcome To AuroCuts ',
      react: <Email/>,
    });

    return NextResponse.json({"data": data})
  } catch (error){
    return NextResponse.json({"error":error})
  }
   

     
    
}