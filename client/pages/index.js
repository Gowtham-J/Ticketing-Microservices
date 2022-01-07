import TicketCard from "../components/card/Card";
const LandingPage = ({ currentUser, tickets }) => {
  return (
    <div>
      {!currentUser ? (
        <h1 className="intro">Microservice Ticketing App</h1>
      ) : (
        <div>
          {!tickets ? (
            <h1>There are no Tickets available yet</h1>
          ) : (
            <h1>Tickets Available</h1>
          )}
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
