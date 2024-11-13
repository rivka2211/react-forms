import { useState } from "react"
import { TaskType } from "../type"
import OneTask from "./OneTask"
import StateForm from "./StateForm"

const TaskList = () => {

    const [taskList, setTaskList] = useState<TaskType[]>([])

    const handleAdd = (item: TaskType) => {
        setTaskList([...taskList, item])
    }
    return (
        <>
            <main style={{ display: "flex" }}>
                <div id="list" style={{ margin: "30px" }}>
                    {taskList.map(item => <OneTask key={item.id} task={item} />)}
                </div>
                <div id="form">
                    <StateForm addToList={handleAdd} />
                </div>
            </main>
        </>
    )
}
export default TaskList