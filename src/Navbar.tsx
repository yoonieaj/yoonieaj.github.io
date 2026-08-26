import { Link } from 'react-router-dom';

function NavChip({ name, path, colour }: { name: string, path: string, colour: string }) {
  return (
    <div className={`chip ${colour}`} >
      <Link to={path}>{name}</Link>
    </div>
  )
}

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center mx-20 pt-10 px-2">
        <nav className="flex flex-row justify-between items-center gap-8">
          <NavChip name="home" path="/" colour="salmon" />
          <NavChip name="about me!" path="/about" colour="gold" />
          <NavChip name="experience" path="/experience" colour="purple" />
          <NavChip name="fun stuff" path="/fun-stuff" colour="cyan" />
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
