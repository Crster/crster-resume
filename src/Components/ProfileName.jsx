function ProfileName({ className }) {
  return (
    <div className={`${className}`}>
      <h1 className="text-5xl print:text-3xl font-profile font-bold text-primary">Amiel Hussien A. Dagadas</h1>
      <p className="text-xl print:text-lg">Full Stack Developer</p>
    </div>
  );
}

export default ProfileName;
