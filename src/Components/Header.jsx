import profile from "../Assets/profile.gif";

function Header() {
  return (
    <div className="flex flex-col gap-y-3 items-center text-center sm:grid sm:grid-cols-3 sm:text-start">
      <img
        className="rounded-full outline outline-2 outline-offset-8 w-52 h-52"
        src={profile}
        alt="Amiel Dagadas"
      />

      <div className="col-span-2">
        <h1 className="text-3xl">Amiel Hussien</h1>
        <h1 className="text-5xl font-bold text-primary">Dagadas</h1>
        <p className="text-xl mt-4">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}

export default Header;
