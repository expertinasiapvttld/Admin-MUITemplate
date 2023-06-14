// component
import { Icon } from "@iconify/react";

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard/app",
    icon: <Icon icon="material-symbols:dashboard" width={20} />,
  },
  {
    title: "Event List",
    path: "/dashboard/events",
    icon: <Icon icon="clarity:event-solid" width={20} />,
  },

  {
    title: "Users List",
    path: "/dashboard/users",
    icon: <Icon icon="fa:users" width={20} />,
  },
  {
    title: "Data Table",
    path: "/dashboard/datatable",
    icon: <Icon icon="majesticons:data-line" width={20} />,
  },
];

export default navConfig;
