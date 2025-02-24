import { type ComponentProps, ReactNode } from 'react'
// Extende todos os atributos que uma tag button tem nativamente no HTML
interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button
            className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-700 "
            {...props}
        />
    )
}
