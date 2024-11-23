import React from 'react'
import MenuOptions from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = {
    children: React.ReactNode
}

const Layout = async (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <MenuOptions />
        <div className='w-full'>
            <InfoBar />
            {props.children}
        </div>
    </div>
  )
}

export default Layout;