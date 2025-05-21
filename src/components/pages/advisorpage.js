import React from "react";
import SidebarFilter from '../slidefilter';
import Banner from "../banner";
import AdvisorList from "../advisoirlist";

export default function AdvisorPage() {
  return (
    <div className="flex max-w-7xl mx-auto p-4 gap-6">
      <div className="w-1/4">
        <SidebarFilter />
      </div>
      <div className="w-3/4 space-y-6">
        <Banner />
        <AdvisorList />
      </div>
    </div>
  );
}
