export default function ExpCard({ role, company, info, tech }) {
  return (
    <div className="w-full h-fit flex flex-col gap-[1rem]">
      {/* Company name */}
      <h1 className="font-semibold text-[5vw] md:text-[30px] max-w-full">{company}</h1>
      
      {/* Role */}
      <h3 className="text-[4vw] md:text-[20px] hover:text-black max-w-full">{role}</h3>
      
      {/* Information */}
      <div className="container">
        {info.map((infomation, index) => (
          <p key={`info-${index}`} className="px-[1rem] text-start max-w-full">
            {infomation}
          </p>
        ))}
      </div>
      
      {/* Technologies */}
      <h2 className="text-[4vw] md:text-[20px]">Technologies</h2>
      <ul className="list-none pl-5 mt-4 flex flex-wrap gap-[1rem]">
        {tech.map((point, index) => (
          <li
            key={`point-${index}`}
            className="w-fit h-fit text-gray-700 flex justify-center items-center"
          >
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
