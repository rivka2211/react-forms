import { ChangeEvent, FormEvent, useState } from "react"
import { TaskType } from "../type"

const StateForm = ({ addToList }: { addToList: Function }) => {

    const emptyTask = { des: '',date:new Date, id: "" }

    const [formData, setFormData] = useState<TaskType>(emptyTask)

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target
    //     setFormData({ ...formData, [id]: value })  
    // }

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };
    

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(formData);
        addToList(formData)
        setFormData(emptyTask)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type='text'
                    id='id'
                    placeholder='id'
                    value={formData.id}
                    onChange={handleChange}
                />
                <input type='text'
                    id='name'
                    placeholder='name'
                    value={formData.des}
                    onChange={handleChange}
                />
                <input type='date'
                    id='date'
                    placeholder='date'
                    value={formData.date.toString()}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </>
    )
}
export default StateForm