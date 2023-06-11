import API from "./base_url";
import  TaskModel from "../models/task_model";

class TaskRepository { 



  async  getTasks() : Promise<Array<TaskModel>> {
        
        const response = await API.get('/task',);
 
        var  tasks:Array<TaskModel> = [] ;
      
         response.data.map((taskData:any) => {
          
             const task = new TaskModel(taskData['id'],taskData['description'],taskData['unit'],taskData['quantity'],taskData['rate'],taskData['amount']);
          
            tasks.push(task);
       });
          
        return tasks;
    }


  async   addTask(task: TaskModel): Promise<Boolean> {    
         try {
             await API.post('/task', {
                id:task.id,
                 description: task.description,
                 unit: task.unit,
                 quantity: task.quantity,
                 rate: task.rate,
                 amount: task.amount
             }) 
             return true;
         }
         catch (e) { 
             return false;
         }
     }

    
   async  removeTask(id: Number): Promise<Boolean> {    
        try {
       await API.delete(`/task/${id}`) 
            return true;
        }
        catch (e) { 
            return false;
        }
    }
}


export default TaskRepository;