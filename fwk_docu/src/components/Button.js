import className from 'classnames'
import { twMerge } from 'tailwind-merge';


const Button = ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded,
    ...rest
}) => {
    const classes = twMerge(
        className(rest.className, 'flex items-center gap-1 px-3 py-1.5 border', {
          'border-blue-500 bg-blue-500 text-white': primary,
          'border-gray-900 bg-gray-900 text-white': secondary,
          'border-green-500 bg-green-500 text-white': success,
          'border-yellow-400 bg-yellow-400 text-white': warning,
          'border-red-500 bg-red-500 text-white': danger,
          'rounded-full': rounded,
          'bg-white': outlined,
          'text-blue-500': outlined && primary,
          'text-gray-900': outlined && secondary,
          'text-green-500': outlined && success,
          'text-yellow-400': outlined && warning,
          'text-red-500': outlined && danger
        })
      );

    return(
        <div>
            <button {...rest} className={classes}> { children } </button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const sum = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

        if(sum > 1){
            return Error('Invalid props set up')
        }
    }
}

export default Button