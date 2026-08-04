export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container d-flex flex-wrap justify-content-between gap-2">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Johnbel Maliñana
        </p>
        <p className="mb-0">Built with React, Vite and Bootstrap</p>
      </div>
    </footer>
  )
}
