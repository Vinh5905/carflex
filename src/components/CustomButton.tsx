'use client'
import { CustomButtonProps } from '../types'
import Image from 'next/image'

function CustomButton({
    btnType,
    title,
    className,
    onClick,
    disabled,
    rightIcon,
    leftIcon,
    display = true,
}: CustomButtonProps) {
    return (
        <button
            className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${className} ${!display && '!hidden'}`}
            disabled={false}
            type={btnType || 'button'}
            onClick={onClick}
            >
            {leftIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={leftIcon}
                        alt="left icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
            {title}
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton
