import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"
import Link from"next/link"

type base_detail_card_Props = {
    title:string,
    content:string,
    route:string
}

const Base_detail_card = ({title,content,route}: base_detail_card_Props) => {
  return (
    <div className='bg-white rounded-lg pt-8 pb-8'>
        <div className="h3-bold text-[22px] text-[#2B3674] p-6">{title}</div>
        <div className="text-[12px] text-[#7D8398] p-6">{content}</div>
        <div className="flex flex-row justify-between">
            <Image src="/images/avatar.svg" alt="avatar" width={50} height={50}></Image>
            <Link href={route}>
            <Button className="bg-[#FF781F] rounded-lg text-white mr-3">Click Here</Button>
            </Link>
        </div>
    </div>
  )
}
export default Base_detail_card