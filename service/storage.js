import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'tasks';

export async function getTasks() {
  try {
    const raw = await AsyncStorage.getItem(TASKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Storage getTasks error', err);
    return [];
  }
}

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error('Storage saveTasks error', err);
  }
}

export async function addTask(task) {
  const tasks = await getTasks();
  const next = [...tasks, task];
  await saveTasks(next);
  return next;
}

export async function removeTask(id) {
  const tasks = await getTasks();
  const next = tasks.filter((t) => t.id !== id);
  await saveTasks(next);
  return next;
}

export default { getTasks, saveTasks, addTask, removeTask };
