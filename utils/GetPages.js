export default async function getPagesByEmail(userEmail) {
  const res = await fetch(`/api/getPages?userEmail=${userEmail}`);
  const data = await res.json();
  return data;
}
