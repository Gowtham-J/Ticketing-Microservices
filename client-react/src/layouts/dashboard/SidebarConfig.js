import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";
import cloudUploadFill from "@iconify/icons-eva/cloud-upload-fill";
import shoppingCartFill from "@iconify/icons-eva/shopping-cart-fill";
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "product",
    path: "/dashboard/products",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "new ticket",
    path: "/dashboard/tickets",
    icon: getIcon(cloudUploadFill),
  },
  {
    title: "order logs",
    path: "/dashboard/orders",
    icon: getIcon(shoppingCartFill),
  },
];

export default sidebarConfig;
