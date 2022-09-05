import React from "react";
import {
  Calculator,
  JournalPlus,
  Handbag,
  ClipboardCheck,
  Cash,
  ColumnsGap,
  People,
} from "@styled-icons/bootstrap";
import {
  Dashboard
} from "@styled-icons/material"

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/dashboard",
  },
  {
    name: "Contabilidad",
    icon: Calculator,
    url: "/dashboard/contabilidad",
    // subItems: [
    //   {
    //     name: "New",
    //     icon: AddShoppingCart,
    //     url: "/dashboard/new-orders",
    //   },
    //   {
    //     name: "Completed",
    //     icon: Done,
    //     url: "/dashboard/completed-orders",
    //   },
    // ],
  },
  {
    name: "Facturacion",
    icon: JournalPlus,
    url: "/dashboard/facturacion",
    // subItems: [
    //   {
    //     name: "Corporate",
    //     icon: Business,
    //     url: "/dashboard/corporate",
    //   },
    //   {
    //     name: "SMB",
    //     icon: HomeWork,
    //     url: "/dashboard/smb",
    //     subItems: [
    //       {
    //         name: "Retail",
    //         icon: Person,
    //         url: "/dashboard/retail",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: "Cartera",
    icon: Handbag,
    url: "/dashboard/inventory",
  },
  {
    name: "Inventario",
    icon: ClipboardCheck,
    url: "/dashboard/inventario",
  },
  {
    name: "Tesoreria",
    icon: Cash,
    url: "/dashboard/tesoreria",
  },
  {
    name: "Activos Fijos",
    icon: ColumnsGap,
    url: "/dashboard/activos-fijos",
  },
  {
    name: "Nomina",
    icon: People,
    url: "/dashboard/nomina",
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);