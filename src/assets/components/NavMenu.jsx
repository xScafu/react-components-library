"use client";

import "./navMenu.css";
import { useEffect, useState, useRef } from "react";

// Componente riutilizzabile per ogni categoria del menu
function MenuCategory({ category, isOpen, onToggle, contentRef }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onToggle(category.id)}
        aria-expanded={isOpen}
        aria-controls={category.id}
      >
        <span>
          <i className={`l-icon ${category.icon}`}></i>
        </span>
        <span>{category.title}</span>
        <i className="r-icon i-chevron-down"></i>
      </button>
      <div
        className="categoryContainer"
        id={category.id}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : "0px",
        }}
        ref={contentRef}
      >
        <ul>
          {category.items.map((item, index) => (
            <li
              key={index}
              className={
                item.type === "link" ? "menu-link-item" : "menu-category-item"
              }
            >
              {item.type === "link" ? (
                <a href={item.href}>
                  <span>{item.title}</span>
                </a>
              ) : (
                <div>
                  <span className="menuChildCategory">{item.title}</span>
                  <div>
                    <ul>
                      {item.children?.map((child, childIndex) => (
                        <li key={childIndex} className="menu-link-item">
                          <a href={child.href}>
                            <span>{child.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function NavMenu() {
  // Passo 1: Struttura dati delle categorie
  const menuCategories = [
    {
      id: "gettingStarted",
      title: "Getting Started",
      icon: "i-home",
      items: [
        {
          type: "link",
          title: "Installation",
          href: "http://",
        },
      ],
    },
    {
      id: "components",
      title: "Components",
      icon: "i-cubes",
      items: [
        {
          type: "category",
          title: "Panel",
          children: [
            {
              type: "link",
              title: "Card",
              href: "http://",
            },
          ],
        },
      ],
    },
    // Passo 6: Aggiungere nuove categorie è semplicissimo!
    // {
    //   id: "utilities",
    //   title: "Utilities",
    //   icon: "i-tools",
    //   items: [
    //     {
    //       type: 'link',
    //       title: "Helpers",
    //       href: "http://"
    //     }
    //   ]
    // }
  ];

  // Passo 2: Stato unico per tutte le categorie
  const [openCategories, setOpenCategories] = useState({});

  // Passo 3: Funzione toggle generica
  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Passo 4: Oggetto di ref per tutte le categorie
  const categoryRefs = useRef({});

  // Inizializza i ref per ogni categoria
  useEffect(() => {
    menuCategories.forEach((category) => {
      if (!categoryRefs.current[category.id]) {
        categoryRefs.current[category.id] = { current: null };
      }
    });
  }, []);

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <ul>
          {/* Passo 5: Rendering dinamico delle categorie */}
          {menuCategories.map((category) => (
            <MenuCategory
              key={category.id}
              category={category}
              isOpen={openCategories[category.id] || false}
              onToggle={toggleCategory}
              contentRef={categoryRefs.current[category.id]}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
