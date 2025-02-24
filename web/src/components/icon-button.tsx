import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
    return (
        <button
            className={twMerge("p-1.5 bg-gray-500 text-blue rounded-sm  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-700", className)}
            {...props}
        />
    )
}
