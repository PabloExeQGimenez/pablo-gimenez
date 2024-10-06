import Link from "next/link"

interface MenuProps {
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li><Link className="link" href={"/"}>Home</Link ></li>
        <li><Link className="link" href={"/proyectos"}>Proyectos</Link></li>
        <li><Link className="link" href={"/contacto"}>Contacto</Link></li>
      </ul>
    </div>
  )
}

export default Menu