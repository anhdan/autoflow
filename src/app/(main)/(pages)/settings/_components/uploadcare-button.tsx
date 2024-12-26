'use client'

import React, { useEffect, useRef } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader'
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload: (e: string) => any
}

function UploadCareButton({ onUpload }: Props) {

  const router = useRouter()

  useEffect(() => {
    console.log('✅', 'Hello uploadcare')
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    document.addEventListener('file-upload-success', handleUpload)
  }, [])

  return (
    <div>
        <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="c525aa1eafccf7e28ee0"
         onFileUploadSuccess={(e) => console.log('✅', e)}
      />

      
    </div>
  )
}

export default UploadCareButton