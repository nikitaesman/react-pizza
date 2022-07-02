import {useCallback, useState} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const request = useCallback(async (url: string, method: string = "GET", body:any = null, headers: any = {}) => {
        try {
            setLoading(true)

            if (body) {
                if (method === "POST") {
                    body = JSON.stringify(body)
                    headers['Content-Type'] = 'application/json'
                }else {
                    let queryArr = Object.entries(body)
                    let numCycle = 0
                    for (let row of queryArr) {
                        numCycle++

                        if (numCycle === 1) {
                            url += "?" + row[0] + "=" + row[1]
                        }else {
                            url += "&" + row[0] + "=" + row[1]
                        }
                    }
                    body = null
                }
            }

            const response: any = await fetch(url, {method, body, headers})
            const data: any = await response.json()

            let clientHeaders: any[] = []

            response.headers.forEach((header: any) => {
                clientHeaders[header[0]] = header[1]
            })
            data.headers = clientHeaders

            if(!response.ok) {
                throw new Error(data.message || "Что то пошло не так")
            }

            return data
        } catch (e: any) {
            setError(e.message)
            throw e
        } finally {
            setLoading(false)
        }
    }, [])

    const clearError = () => setError(null)

    return {request, loading, error, clearError}
}