import ExperienceEntry from "../component/ExperienceEntry";

const align = {
  marginLeft: "10vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "70%",
};

export default function Experience() {
  return (
    <div style={align}>
      <h1>Experience</h1>
      <ExperienceEntry
        titles={"Lorem Ipsum"}
        timeline={"Feb 2022 - present"}
        company={"Tokopedia"}
        desc={"Lorem ipsum"}
      />
      <ExperienceEntry
        titles={"Lorem Ipsum"}
        timeline={"July 2021 - Feb 2022"}
        company={"Hactiv8"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
        }
      />
    </div>
  );
}
