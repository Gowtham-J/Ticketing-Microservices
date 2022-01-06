import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OrderTable from "../../components/order/OrderTable";

const OrderIndex = ({ orders }) => {
  return (
    <div
      style={
        orders.length === 0
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }
          : {}
      }
    >
      {orders.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <h1>
            <AddShoppingCartIcon fontSize="large" /> No Orders Yet
          </h1>
        </div>
      ) : (
        <>
          <h1>Order list</h1>
          <OrderTable orders={orders} />
        </>
      )}
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
