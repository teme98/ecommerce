import "./goldLine.css";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function GoldLine() {
  const arr = [
    {
      id: 1,
      icon: <EmojiEventsIcon id="icon-gold" style={{ fontSize: "50px" }} />,
      title: "High Quality",
      parg: "crafted from top materials",
    },
    {
      id: 2,
      icon: <VerifiedIcon id="icon-gold" style={{ fontSize: "50px" }} />,
      title: "Warranty Protection",
      parg: "Over 2 years",
    },
    {
      id: 3,
      icon: (
        <VolunteerActivismIcon id="icon-gold" style={{ fontSize: "50px" }} />
      ),
      title: "Free Shipping",
      parg: "Order over 150 $",
    },
    {
      id: 4,
      icon: <SupportAgentIcon id="icon-gold" style={{ fontSize: "50px" }} />,
      title: "24 / 7 Support",
      parg: "Dedicated support",
    },
  ];

  const array = arr.map((e) => {
    return (
      <div key={e.id} className="gold-body">
        <div>{e.icon}</div>
        <div>
          <h4>{e.title}</h4>
          <p>{e.parg}</p>
        </div>
      </div>
    );
  });

  return <div className="gold-line">{array}</div>;
}

export default GoldLine;
