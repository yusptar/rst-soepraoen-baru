import { React } from "react";
import Link from "next/link";
import { listStickyButtons } from "../List/ListStickyButton";

export function StickyContactButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col bg-blue-900">
      {listStickyButtons.map((button) => (
        <Link
          className="flex items-center justify-between text-white bg-blue-900 hover:bg-white hover:text-blue-900 p-1"
          href={button.link}
          key={button.id}
        >
          {button.icon}
          <h5 className="mx-2 hidden">{button.name}</h5>
        </Link>
      ))}
    </div>
  );
}
