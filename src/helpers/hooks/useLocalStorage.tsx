import { useState } from "react";
import { useEffect } from "react";


function useLocalStorage(initialValue:string, key:string) {
    const [storageValue, setStorageValue] = useState<"ar" | "en">(
        function() {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : initialValue;
        }
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storageValue));
    }, [storageValue, key]);

    return {storageValue, setStorageValue}
}

export default useLocalStorage