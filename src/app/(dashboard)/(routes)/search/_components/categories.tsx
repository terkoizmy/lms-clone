"use client";
import { Category } from "@prisma/client";
import { 
  FcEngineering,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcCloseUpMode,
  FcSportsMode,
  FcMoneyTransfer,
  FcManager,
  
} from "react-icons/fc"
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category [];
}

const iconMap: Record<Category["name"], IconType> = {
  "Music": FcMusic,
  "Photography": FcOldTimeCamera,
  "Fitness": FcSportsMode,
  "Finance": FcMoneyTransfer,
  "Computer Science": FcMultipleDevices,
  "Management": FcManager,
  "Engineering": FcEngineering,
  "Agriculture": FcCloseUpMode ,
}

export const Categories = ({
  items
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem key={item.id} label={item.name} icon={iconMap[item.name]} value={item.id} />
      ))}
    </div>
  )
}