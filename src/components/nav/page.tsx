import Link from "next/link"

interface MenuProps {
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li><Link href={"/"}>Home</Link ></li>
        <li><Link href={"/proyectos"}>Proyectos</Link></li>
        <li><Link href={"/contacto"}>Contacto</Link></li>
      </ul>
    </div>
  )
}

export default Menu