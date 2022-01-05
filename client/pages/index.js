import TicketCard from "../components/card/Card";

const LandingPage = ({ currentUser, tickets }) => {
  return (
    <div>
      {!currentUser ? (
        <h1>Welcome</h1>
      ) : (
        <div>
          <h1>Tickets Available</h1>
          <TicketCard tickets={tickets} />
        </div>
      )}
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
