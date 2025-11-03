import React, { useEffect } from "react";
import icon from "../../assets/Images/img/blog/blog-2.jpg";
const Footer = () => {
  const pageData = {
    title: "Account",
    menuNav: {
      items: [
        {
          label: "My Orders",
          icon: "bi bi-box-seam",
          href: "#orders",
          badge: 3,
          active: true,
        },
        {
          label: "Wishlist",
          icon: "bi bi-heart",
          href: "#wishlist",
          badge: 12,
        },
        {
          label: "Payment Methods",
          icon: "bi bi-wallet2",
          href: "#wallet",
        },
        {
          label: "My Reviews",
          icon: "bi bi-star",
          href: "#reviews",
        },
        {
          label: "Addresses",
          icon: "bi bi-geo-alt",
          href: "#addresses",
        },
        {
          label: "Account Settings",
          icon: "bi bi-gear",
          href: "#settings",
        },
      ],
      footer: [
        {
          label: "Help Center",
          icon: "bi bi-question-circle",
          link: "#",
          classNameNameName: "help-link",
        },
        {
          label: "Log Out",
          icon: "bi bi-box-arrow-right",
          link: "#",
          classNameNameName: "logout-link",
        },
      ],
    },
  };
const data = [
    {
      menuData: [
        { dropdown1: "Action" },
        { dropdown1: "Another Action" },
        { dropdown1: "More Action" },
      ],
    },]
  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => console.log(response, "logggggg")
    );
    // .then((data) => {
    // console.log(data, "strignyttttj");
    // })
    // .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* <div>
      <p>Thank you for visiting our website!</p>

      {
        <ul>
          {pageData.menuNav.items.map((item) => {
            return (
              <>
                <div>
                  {" "}
                  <li classNameNameName="nav bg-light m-1 list-group ">{item.label}</li>
                </div>
              </>
            );
          })}
        </ul>
      }
    </div> */}
      <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
     
        </div>
      </div>
    </div>
  );
};


export default Footer;
