"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CowsTable = {
  id: string
  identifier: number
  name: string
  status: "healthy" | "potentially sick" | "sick" | "dead"
  location: string
}

export const columns: ColumnDef<CowsTable>[] = [
  {
    accessorKey: "identifier",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
]
