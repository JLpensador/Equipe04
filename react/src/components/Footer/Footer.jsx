import './Footer.css';

export default function Footer() {
    return(

        <footer className="container d-flex justify-content-between align-items-center mt-5 pt-5 pb-3 border-top border-secondary border-opacity-25">
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="text-gray-secondary mb-0 fs-6">Página 1 de 3</p>
      </footer>

    );
}