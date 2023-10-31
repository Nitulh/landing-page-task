// eslint-disable-next-line react/prop-types
const Section = ({ title, content }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <section className="section" id={`section${title.split(" ")[0]}`}>
      <div className="section-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;
