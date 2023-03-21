import type Category from "@/models/Category";

type Equipment = {
  id: number,
  category: Category,
  imagePath: string,
  name: string,
  description: string
}

export default Equipment;
