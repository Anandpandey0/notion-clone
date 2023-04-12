async function savePageItems(userEmail, items) {
  try {
    const response = await fetch("/api/addPages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, items }),
    });
    if (!response.ok) {
      throw new Error("Failed to save todo items.");
    }
  } catch (error) {
    console.error(error);
  }
}
export default savePageItems;
