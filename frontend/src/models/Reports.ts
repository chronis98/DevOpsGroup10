type Report = {
  "id": string,
  "createdAt": Date,
  "status": number,
  "comment": string,
  "user": User
}

type User = { 
  "id": number, 
  "username": string,
  "email": string,
  "createdAt":null
}

export default Report;