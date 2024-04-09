import dbConnect from "../../../db/connect"
import Comment from "../../../db/models/Comment"
import Place from "../../../db/models/Place"

export default async function handler(request, response) {
  await dbConnect()

  if (request.method === "POST") {
    try {
      const commentData = request.body.newComment
      const newComment = await Comment.create(commentData)
      const commentId = newComment._id

      await Place.updateOne(
        { _id: request.body.place._id },
        { $push: { comments: commentId } }
      )

      return response
        .status(200)
        .json({ status: "Comment created", id: newComment._id })
    } catch (e) {
      console.error(e)
      return response.status(400).json({ error: e.message })
    }
  }
}
