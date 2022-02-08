const flex = {
  display: "flex",
  justifyContent: "space-between",
};

const title = {
  fontWeight: "bold",
  fontSize: "24px",
  margin: "0",
  padding: "0",
};

const time = {
  color: "orange",
  margin: "0",
  padding: "0",
};

const comp = {
  color: "grey",
};

const space = {
  marginTop: "30px",
};

export default function ExperienceEntry({ titles, timeline, company, desc }) {
  return (
    <div style={space}>
      <div style={flex}>
        <p style={title}>{titles}</p>
        <p style={time}>{timeline}</p>
      </div>
      <div style={comp}>{company}</div>
      <p>{desc}</p>
    </div>
  );
}
