import React from "react";
import "./footer.css";
// import fb from "../assets/fbimg.png";
// import twitter from "../assets/twittering.png";
// import linkedin from "../assets/linkedining.png";
// import insta from "../assets/instaimg.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        {/* <div className="sb_footer-links"> */}
          <div className="sb_footer-links-div">
            <h4>Contact Us</h4>
            <h6>Hostel Co-ordinator</h6>
            <h6>+91-1112223333</h6>
            <h6>Coordinator_hostel@daiict.ac.in</h6>
          </div>
          <div className="sb_fotter-links_div">
            <h4>Useful Links</h4>
            <h6><a href="https://www.daiict.ac.in/" target="_blank">DA-IICT</a></h6>
            <h6><a href="http://placement.daiict.ac.in/" target="_blank">Placement</a></h6>
            <h6><a href="https://ecampus.daiict.ac.in/" target="_blank">E-campus</a></h6>
          </div>

          <div className="sb_fotter-links_div">
            <h4>Follow Us On</h4>
            <h6><a href="https://www.facebook.com/profile.php?id=100092117173675" target="_blank">Facebook</a></h6>
            <h6><a href="https://www.instagram.com/" target="_blank">Instagram</a></h6>
            <h6><a href="https://www.twitter.com/" target="_blank">Twitter</a></h6>
          </div>

          <hr ></hr>


          {/* <div className="footerbelow"> */}

            <div className="sb_footer-copyright">
              <p>@{new Date().getFullYear()} Grp-5. All right reserved.</p>
            </div>

            {/* <div className="sb_footer-below-links">
              <a href="/terms">
                <p>Terms & Conditions</p>
              </a>
              <a href="/terms">
                <p>Privacy</p>
              </a>
              <a href="/terms">
                <p>Security</p>
              </a>
            </div> */}
          {/* </div> */}
        </div>
      {/* </div> */}
    </div>
  );
};
export default Footer;
