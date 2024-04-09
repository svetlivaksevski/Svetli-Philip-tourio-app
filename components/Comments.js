import styled from "styled-components"
import { FormContainer, Input, Label } from "./Form"
import { StyledButton } from "./StyledButton.js"
import { useRouter } from "next/router"

export default function Comments({ place }) {
  const router = useRouter()
  const { id } = router.query

  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `

  async function handleSubmitComment(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get("name")
    const comment = formData.get("comment")

    const body = {
      place: place,
      newComment: {
        name: name,
        comment: comment,
      },
    }

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (response.ok) {
      router.reload()
    }
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {place.comments && (
        <>
          <h1> {place.comments.length} fans commented on this place:</h1>
          {place.comments.map(({ _id, name, comment }) => {
            return (
              <div key={_id}>
                <p>
                  <small>
                    <strong>{name}</strong> commented on {place.location}
                  </small>
                </p>
                <span>{comment}</span>
              </div>
            )
          })}
        </>
      )}
    </Article>
  )
}
