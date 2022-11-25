
function Footer() {
  return (
    <div className="flex bg-slate-100 h-10 justify-center items-center shadow-sm">
      <p className="blue-text">&copy; {new Date().getFullYear()} &nbsp;</p>
      
      <p className="blue-text"> Xfix ng.</p>
    </div>
  );
}

export default Footer;
