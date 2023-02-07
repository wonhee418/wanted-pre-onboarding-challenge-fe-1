const SectionTitleArea = (props: { title: string; desc: string }) => {
  const { title, desc } = props;
  return (
    <div className="py-10 border-b-slate-300 text-center">
      <h1 className="font-bold text-4xl pb-2">{title}</h1>
      <p className="">{desc}</p>
    </div>
  );
};

export default SectionTitleArea;
