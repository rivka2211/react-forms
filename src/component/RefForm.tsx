import { FormEvent, useRef } from "react"

const RefForm = ({ addToList }: { addToList: Function }) => {

    const idRef = useRef<HTMLInputElement>(null)
    const desRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(idRef.current);
        console.log(idRef);

        addToList({
            id: idRef.current?.value,
            des: desRef.current?.value,
            date:dateRef.current?.value
        }) 
        if (idRef.current?.value) idRef.current.value = ''
        if( desRef.current?.value)  desRef.current.value=""
        if(dateRef.current?.value) dateRef.current.value=''
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type='text'
                ref={idRef}
                placeholder='id'
            />
            <input type='text'
                ref={desRef}
                placeholder='description'
            />
            <input type='date'
                ref={dateRef}
                placeholder='date'
            />
            <button type="submit">Save</button>
        </form>
    </>)
}
export default RefForm
