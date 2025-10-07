import { useEffect } from "react";

export const useAutoSave = async (data, delay) => {

    useEffect(() => {
        setTimeout(() => {
            const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contatos`)
        })
    }, delay)
}