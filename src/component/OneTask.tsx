import { TaskType } from "../type"

const OneTask=({task}:{task:TaskType})=>{

const color=()=>{

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    console.log("current+3 "+currentDate.getDate());
    console.log("task.date "+task.date.getDate());

    let d=new Date(task.date)

    if(d.getDate()==Date.now())
        return "red"
       if(Date.now()<d.getDate()&&d.getDate()<currentDate.getDate())
        return "orange"
    return "rgba(216, 151, 200,0.7)"
}

    return(
        <>
         <div style={{ border: '1px solid black',backgroundColor:color(),margin:"5px",padding:'5px'}}>
            <div>des: {task.des}</div>
            <div>date: {task.date.getDate()}</div>
         </div>
        </>
    )
}
export default OneTask