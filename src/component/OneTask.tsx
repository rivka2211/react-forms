import { TaskType } from "../type"

const OneTask=({task}:{task:TaskType})=>{

const color=()=>{
    let dayes = Math.floor((Date.parse(task.date.toString()) - Date.now()) / (24 * 3600 * 1000))

    if(dayes==-1)
        return "red"
       if(dayes<3&&dayes>=0)
        return "orange"
    return "lightblue"
}

    return(
        <>
         <div style={{ border: '1px solid black',backgroundColor:color(),margin:"5px",padding:'5px'}}>
            <div>des: {task.des}</div>
            <div>date: {task.date.toString()}</div>
         </div>
        </>
    )
}
export default OneTask