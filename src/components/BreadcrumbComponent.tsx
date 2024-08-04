import { Store, User, UserPen } from "lucide-react";
import React from "react";

const BreadcrumbComponent = ({ userName }: any) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Store className="size-4 mr-1" />
          <a href="/market-place">Market place</a>
        </li>
        <li>
          <User className="size-4 mr-1" />
          <a href={`/user/${userName}`}>User</a>
        </li>
        <li>
          <UserPen className="size-4 mr-1" />
          <a href={`/user/${userName}/edit`}>Edit Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default BreadcrumbComponent;
