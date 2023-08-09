//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <h1 className="head-text text-left">Home</h1>
    </Fragment>
  );
}
