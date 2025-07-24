import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AppAvatar = () => {
  return (
    <div>
      <Avatar className="size-8">
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvwFhX9iTlK-spJxrqvJmphIFXD0IYtkeGw&s" />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AppAvatar;
