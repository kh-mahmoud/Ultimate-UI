"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { todoItems } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import * as dayjs from "dayjs";
import { useState } from "react";
import { Calendar as DatePicker } from "@/components/ui/calendar";

const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className="title mb-4">To Do List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="mb-2 w-full cursor-pointer">
            <Calendar />
            {/* @ts-ignore */}
            {date ? dayjs(date).format("dd-DD-MMM-YYYY") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-fit ">
          <DatePicker
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="h-[320px] w-full leading-3 gap-3 rounded-md border p-4">
        {todoItems.map((item, index) => (
          <Card key={item} className="p-3 mb-2">
            <div className="flex items-center gap-2">
              <Checkbox id={`check ${index}`} />
              <label
                htmlFor={`check ${index}`}
                className="text-sm text-muted-foreground"
              >
                {item}
              </label>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </>
  );
};

export default ToDoList;
