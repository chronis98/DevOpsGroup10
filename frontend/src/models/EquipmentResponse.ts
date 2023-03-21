import type Category from '@/models/Category';
import type Report from '@/models/Reports';

type EquipmentResponse = {
  "id": number,
  "name": string,
  "description": string,
  "imagePath": string,
  "category": Category,
  "reports": Report[]
}

export default EquipmentResponse;