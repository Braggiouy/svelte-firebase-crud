<script>
	//We import the database/firestore
	import {db} from './firebase'

  let task = {
    name: "",
    description: "",
  };

  const handleSubmit = () => {
    console.log(db);
  };

	const addTask = () => {
		db.collection('tasks').doc().set(task)
	} 
</script>

<main>
  <h1>Hello World</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={task.name} type="text" placeholder="write a new Task" />
    <textarea
      bind:value={task.description}
      rows="3"
      placeholder="write a task description"
    />
    <button>Button save</button>
  </form>
</main>

<style>
</style>
