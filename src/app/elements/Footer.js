import React from 'react';

const Footer = () => {
    const time = new Date().getFullYear();


    return (

        <footer className="page-footer">
             <div className="container">
              
            <div className="footer-copyright">
            <div className="container">
            Copyright &copy; BIT {time}
        </div>
      </div>
      </div>
      
      
    </footer>

    )
}
export { Footer }

 // <div className="footer">
        //     <footer>
        //         <p>Copyright &copy; BIT {time}</p>
        //     </footer>
        // </div>