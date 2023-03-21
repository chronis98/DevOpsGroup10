type address = {
"id": number,
"number": number,
"addition": null|string,
"street": string,
"city": string,
"postcode": string,
"coords": coords
}

type coords = {
  "lat":4.956683,
  "long":52.35577
}

export default address;