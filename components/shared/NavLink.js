import Link from 'next/link';

export default function NavLink({ link, title, setMenuOpen }) {
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <li onClick={handleCloseMenu}>
      {/* Adding scroll={false} on Links makes smooth scrolling work again */}
      <Link href={link} scroll={false}>
        {title}
      </Link>
    </li>
  );
}
