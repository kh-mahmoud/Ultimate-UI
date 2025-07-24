

import { latestTransactions, popularContent } from "@/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const CardList = ({ title }: { title: string }) => {
  const list = title == "Popular Content" ? popularContent : latestTransactions;
  return (
   <div className="">
      <h1 className="title mb-6">{title}</h1>
      <div className="card-wrapper">
        {list.map((item) => (
          <Card key={item.id} className="card">
            <div className="card-img">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="card-content">
              <CardTitle className="card-title">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
