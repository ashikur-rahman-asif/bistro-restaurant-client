import { useEffect } from "react"
import { useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                // const popularItems=data.filter(item=>item.category==='popular')
                setMenu(data)
                setLoading(false)
                // console.log(data)
            })
    }, [])
    return [menu,loading]
}
export default useMenu