const LogoGroup = ({ logos }) => (
  <div className="logo-group relative flex flex-col items-center justify-center w-[150px] h-14 shrink-0">
    {logos.map(([name, Icon, positionClass]) => (
      <div
        key={name}
        className={`logo ${positionClass} absolute top-0 left-1/2 max-h-14 w-[150px]`}
      >
        <div className="flex items-center justify-center text-slate-200 whitespace-nowrap">
          <div className="mr-2">
            <Icon size={35} />
          </div>
          <span className="font-bold">{name}</span>
        </div>
      </div>
    ))}
  </div>
);

export default LogoGroup;
