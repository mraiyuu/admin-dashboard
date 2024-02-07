import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const ThemeSetting = () => {
  return (
    <div className='bg-half-transparent w-screen fixed right-0 top-0 nav-item'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default ThemeSetting