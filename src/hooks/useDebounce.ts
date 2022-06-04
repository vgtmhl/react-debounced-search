import React from 'react';

/**
 * Whenever the "real" value changes, we start a timer after which we return the debounced value.
 * If the hook is not called again, the timer will expire and return.
 * 
 * If the hook is valled again, then the timer will be re-initialized
 */

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value)

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debouncedValue
}

export default useDebounce

