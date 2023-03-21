type Report = {
  "id": string,
  "createdAt": string,
  "status": number,
  "comment": string,
  "user": User
}

type User = {
  "id": number,
  "username": string,
  "email": string,
  "createdAt": null | string
}

export default Report;
