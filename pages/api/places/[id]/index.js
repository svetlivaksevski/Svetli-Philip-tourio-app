import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  const { id } = request.query;
  if (!id) return

  await dbConnect()

  if (request.method === "GET") {
    try {
      const foundPlace = await Place.findById(id);
      return response.status(200).json(foundPlace);
    } catch (error) {
      console.error(error);
    }
  }

  if (request.method === "PUT") {
    try {
      const placeData = request.body;
      await Place.findByIdAndUpdate(id, {
        $set: placeData
      });
      return response.status(200).json({ status: "Place created" });
    } catch (e) {
      console.error(e);
      return response.status(400).json({ error: e.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Place successfully deleted" });
    } catch (e) {
      console.error(e);
      return response.status(400).json({ error: e.message });
    }
  }
}
