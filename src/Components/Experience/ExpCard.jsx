export default function ExpCard({ role,duration, company, info, tech }) {
  return (
    <div className="w-full h-fit flex flex-col gap-[1rem]">
      {/* Company name */}
      <h1 className="font-semibold text-[18px] md:text-[30px] max-w-full" style={{fontFamily:"var(--primary)"}} >{company}</h1>
      <h2>{duration}</h2>
      
      {/* Role */}
      <h3 className="text-[16px] md:text-[20px] hover:text-black max-w-full" style={{fontFamily:"var(--oswald)"}}>{role}</h3>
      
      {/* Information */}
      <div className="container px-4">
      <ul className=" list-disc">
        {info.map((infomation, index) => (
          <li key={`info-${index}`} className="px-[1rem] text-start w-auto text-[12px] lg:text-[20px]">
            {infomation}
          </li>
        ))}
      </ul>
      </div>
      
      {/* Technologies */}
      <h2 className="text-[14px] font-semibold" style={{fontFamily:"var(--oswald)"}}>Technologies</h2>

      <div className="container">
      <ul className="list-none px-5 flex flex-wrap gap-[.5rem]">
        {tech.map((point, index) => (
          <li
            key={`point-${index}`}
            className="w-fit h-fit text-gray-700 flex justify-center items-center"
          >
            <span className="text-[12px] lg:text-[20px]">{point}</span>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}
