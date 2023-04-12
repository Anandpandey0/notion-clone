export default async function getTasksByEmail(userEmail) {
  const res = await fetch(`/api/getTasks?userEmail=${userEmail}`);
  const data = await res.json();
  return data;
}
