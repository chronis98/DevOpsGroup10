import type Category from "@/models/Category";
import type Report from "@/models/Reports";

type EquipmentReports = {
  "id": number,
  "name": string,
  "description": string,
  "imagePath": string,
  "category": Category,
  "reports": Report[]
};

export default EquipmentReports;
