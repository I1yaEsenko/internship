import { ReactNode } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'

export interface IButtonProps extends IClassNameProps {
   as?: ReactNode
   children: ReactNode
}

export const cnButton = cn('Button')