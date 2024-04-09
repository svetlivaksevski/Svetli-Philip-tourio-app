import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (!id) {
    return;
  }

  if (request.method === "DELETE") {
    console.log(id);
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

  if (request.method === "GET") {
    console.log("hello");
    try {
      const foundPlace = await Place.findById(id);
      return response.status(200).json(foundPlace);
    } catch (error) {
      console.error(error);
    }
  }

  //   const place = db_places.find((place) => place._id.$oid === id);
  //   const comment = place?.comments;
  //   const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  //   const comments = db_comments.filter((comment) =>
  //     allCommentIds.includes(comment._id.$oid)
  //   );

  //   if (!place) {
  //     return response.status(404).json({ status: "Not found" });
  //   }

  //   response.status(200).json({ place: place, comments: comments });
}
