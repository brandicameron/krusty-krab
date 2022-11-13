import Link from 'next/link';

export default function NavLink({ link, title, setMenuOpen }) {
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  /* Adding scroll={false} on Links makes smooth scrolling work again */

  return (
    <li onClick={handleCloseMenu}>
      <Link href={link} scroll={false}>
        {title}
      </Link>
    </li>
  );
}
