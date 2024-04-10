import styled from "styled-components"
import { StyledButton } from "./StyledButton.js"

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid #053b50;
  border-radius: 0.5rem;
`

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid #053b50;
  border-radius: 0.5rem;
  padding: 0.5rem;
`

export const Label = styled.label`
  font-weight: bold;
`

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    onSubmit(data)
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        required
        defaultValue={defaultData?.image}
      />
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        required
        maxLength={30}
        defaultValue={defaultData?.location}
      />
      <Label htmlFor="map-url">Map Url</Label>
      <Input
        id="map-url"
        name="mapURL"
        type="text"
        required
        defaultValue={defaultData?.mapURL}
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        maxLength={100}
        defaultValue={defaultData?.description}
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StyledButton>
    </FormContainer>
  )
}
