const TodoForm = () => {

    const onFormSubmit = () =>{

    }

    const onInputChange = () =>{
        
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new todo...."
                className="input"
                onChange={onInputChange}
            />
        </form>
    )
}

export default TodoForm;