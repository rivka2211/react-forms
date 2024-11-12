import { useState } from "react"
import { TaskType } from "../type"
import OneTask from "./OneTask"
import StateForm from "./StateForm"

const TaskList = () => {

    const [taskList, setTastList] = useState<TaskType[]>([])

    const handleAdd = (item: TaskType) => {
        setTastList([...taskList, item])
    }
    return (
        <>
            <main style={{ display: "flex", justifyContent: "space-between" }}>
                <div id="list">
                    <OneTask task={{
                        id: '1',
                        des: 'learn',
                        date: new Date(7, 11, 2024)
                    }} />
                     <OneTask task={{
                        id: '2',
                        des: 'h.w.',
                        date: new Date(8, 11, 2024)
                    }} />
                    {/* {taskList.map(task => <OneTask key={task.id} task={task} />)} */}
                </div>
                <div id="form">
                    <StateForm addToList={handleAdd} />
                </div>
            </main>
        </>
    )
}
export default TaskList