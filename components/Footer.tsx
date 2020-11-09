export default function Footer() {
  return (
    <>
      <footer>Made by Petar Stefanov using GoodReadApi.</footer>
      <style>{`
        footer {
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          height: 3rem;
          background-color: #fff;
          border-top: 1px solid #eaeaea;
        }
      `}</style>
    </>
  );
}
