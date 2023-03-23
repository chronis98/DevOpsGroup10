type Address = {
"id": number,
"number": number,
"addition": null|string,
"street": string,
"city": string,
"postcode": string,
"coords": Coords
}

type Coords = {
  "lat": number,
  "long": number
}

export default Address;
