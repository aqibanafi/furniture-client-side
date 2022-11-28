import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - The Personal`
    }, [title])
};

export default useTitle;