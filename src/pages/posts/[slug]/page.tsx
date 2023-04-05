import React from 'react'

type Props ={
  params:{
    slug: string;
  }
}


export default function Post({params:{slug} }:Props) {
  return ( 
    <div>Post{slug}</div>
  )
}
