'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import libraryData from '../../../data/libraries'
import LoadingSkeleton from '@/app/_components/LoadingSkeleton'

const Library = () => {
  const params = useParams();
  const slug = params.library; // Access the dynamic segment named 'library'

  const [data, setData] = useState({})
  
  useEffect(() => {
    if(slug)
      setData(libraryData[slug]);
  }, [])
  

  return (
    <div style={{height: "100vh"}}>
      { data ? (
        <div>
            {data.name}
        </div>
      ): (
        <LoadingSkeleton />
      )}
    </div>
  )
}

export default Library
