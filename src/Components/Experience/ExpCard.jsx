export default function ExpCard({ role, company, info, tech }) {
  return (
    <div className="w-full h-fit flex flex-col gap-[1rem]">
      <h1 className="font-semibold text-[15px] md:text-[30px]">{company}</h1>
      <h3 className="text-[10px] md:text-[20px] hover:text-black">{role}</h3>
      <div className="contianer">
      {info.map((infomation,index) => (
        <p key={`info-${index}`}className="px-[1rem] text-start">{infomation}</p>
      ))}
      </div>
      <h2>Technologies</h2>
      <ul className="list-none pl-5 mt-4 flex flex-wrap items-center justify-around gap-[1rem]">
        {tech.map((point, index) => (
          <li key={`point-${index}`} className="w-fit h-fit text-gray-700 flex justify-center items-center">
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
