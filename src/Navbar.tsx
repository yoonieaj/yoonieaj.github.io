import { Link } from 'react-router-dom';

function NavChip({ name, path, colour, isActive }: { name: string, path: string, colour: string, isActive: boolean }) {
  const chipStyle = isActive ? { backgroundColor: `var(--accent-${colour})`, color: `var(--bg)` } : { color: `var(--accent-${colour})` };
  return (
    <div className={`chip`} style={chipStyle}>
      <Link to={path}>{name}</Link>
    </div>
  )
}

export default function Navbar({ activeRoute }: { activeRoute?: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mx-20 pt-10 px-2">
        <nav className="flex flex-row justify-between items-center gap-8">
          <NavChip name="home" path="/" colour="salmon" isActive={activeRoute === '/'} />
          <NavChip name="about me!" path="/about" colour="gold" isActive={activeRoute === '/about'} />
          <NavChip name="experience" path="/experience" colour="purple" isActive={activeRoute === '/experience'} />
          <NavChip name="fun stuff" path="/fun-stuff" colour="cyan" isActive={activeRoute === '/fun-stuff'} />
        </nav>
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="bg-(--accent-salmon) h-11 w-11 rounded-[0.75rem]"></div>
          <div className="bg-(--accent-purple) h-11 w-11 rounded-[0.75rem]"></div>
          <div className="bg-(--accent-cyan) h-11 w-11 rounded-[0.75rem]"></div>
        </div>
      </div>
      <hr className="border-(--accent-cyan) opacity-50 w-9/10 mx-auto my-5"/>
    </div>
  )
}
