```
let novoArray = tarefas.filter ((item)=>{
    return item.status === "done"
})
.map((tarefa) =>{
  return tarefa.titulo
})
return novoArray
```