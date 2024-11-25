'use client'

import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload?: any 
}

function UploadCareButton({}: Props) {
  return (
    <div>
        <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="c525aa1eafccf7e28ee0"
      />
    </div>
  )
}

export default UploadCareButton