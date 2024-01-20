import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }: any) => {
  return (
    <ul className="menu-list">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className="menu-item has-sub">
                <a
                  href=""
                  className="item-anchor  d-flex align-item-center"
                  data-effect="Home"
                >
                  {item.name}
                  <i className="icon icon-chevron-down" />
                </a>

                <ul className="submenu">
                  {categories &&
                    categories?.data?.map(({ attributes: c, id }: any) => {
                      return (
                        <li key={id} className=" u-full-width">
                          <a
                            href={`/category/${c.slug}`}
                            className="item-anchor d-flex"
                            style={{ justifyContent: "space-between" }}
                          >
                            {c.name}
                            <span className="text-primary ">
                              {`(${c.products.data.length})`}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
            ) : (
              <li className="">
                <Link href={`${item?.url}`}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
