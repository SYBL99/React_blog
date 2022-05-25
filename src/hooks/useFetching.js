import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eror, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(eror.message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, eror]
}