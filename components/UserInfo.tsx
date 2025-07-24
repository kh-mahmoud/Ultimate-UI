import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Sheet, SheetTrigger } from "./ui/sheet";
import EditUser from "./EditUser";

const UserInfo = () => {
  return (
    <div className="user-info-card">
      <div className="user-info-header">
        <h1 className="title">Information</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Edit User</Button>
          </SheetTrigger>
          <EditUser />
        </Sheet>
      </div>
      <div className="user-info-body">
        <div className="user-info-progress-container">
          <p className="user-info-progress-label">Profile completion</p>
          <Progress value={66} />
        </div>
        <div className="user-info-field">
          <span className="user-info-field-label">Username:</span>
          <span>john.doe</span>
        </div>
        <div className="user-info-field">
          <span className="user-info-field-label">Email:</span>
          <span>john.snow@gmail.com</span>
        </div>
        <div className="user-info-field">
          <span className="user-info-field-label">Phone:</span>
          <span>+1 234 5678</span>
        </div>
        <div className="user-info-field">
          <span className="user-info-field-label">Location:</span>
          <span>New York, NY</span>
        </div>
        <div className="user-info-field">
          <span className="user-info-field-label">Role:</span>
          <Badge>Admin</Badge>
        </div>
      </div>
      <p className="user-info-footer">Joined on 2025.01.01</p>
    </div>
  );
};

export default UserInfo;
