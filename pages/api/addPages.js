import connectDb from "../../lib/mongodb";
import PageList from "../../models/PageModel";
// connectDb.catch((error) => console.error(error));

export default async function AddPages(req, res) {
  const { userEmail, items } = req.body;
  await connectDb();

  try {
    // Try to find an existing Page list with the given userEmail
    const existingPageList = await PageList.findOne({ userEmail });

    if (existingPageList) {
      // If an existing Page list was found, update its items
      existingPageList.items = items;
      const updatedPageList = await existingPageList.save();
      res.status(201).json({ success: true });
    } else {
      // If no existing Page list was found, create a new one
      const pageList = new PageList({
        userEmail,
        items,
      });
      await pageList.save();
      res.status(201).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error saving Page items" });
  }
}
