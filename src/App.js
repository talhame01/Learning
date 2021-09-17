const App = () => {
    const tasks = [{ name: 'Task 1', status: true }, { name: 'Task 2', status: false }]
    return <ul>
        {tasks.map(task => task.status && <li>{task['name']}</li>)}
    </ul>
}

export default App;