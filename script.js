// Referencias
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

// Abrir / cerrar menú
toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('active')) {
        cerrarMenu();
    } else {
        nav.classList.add('active');
    }
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
        cerrarMenu();
    }
});

// Cerrar al seleccionar una opción
nav.addEventListener('click', (e) => {
    if (e.target.closest('a') && nav.classList.contains('active')) {
        cerrarMenu();
    }
});

// Función para cerrar con animación
function cerrarMenu() {
    nav.classList.remove('active');
    nav.classList.add('closing');
    setTimeout(() => nav.classList.remove('closing'), 400);
}

// Animación escalonada de tarjetas de servicios
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // retraso escalonado
        }
    });
}, {
    threshold: 0.2 // activa cuando el 20% de la tarjeta es visible
});

serviceCards.forEach(card => observer.observe(card));


/* =========================================
   MÓDULO: PRODUCTOS
   DESCRIPCIÓN: Microinteracciones para botones de compra
   NOTA: Encapsulado para evitar conflictos globales
========================================= */

(() => {
  const botones = document.querySelectorAll('#productos .btn-comprar');
  
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      boton.textContent = 'Agregado ✔';
      boton.disabled = true;
      setTimeout(() => {
        boton.textContent = 'Comprar';
        boton.disabled = false;
      }, 2000);
    });
  });
})();

/* =========================================
   MÓDULO: PRODUCTOS (Filtros + Animaciones)
   DESCRIPCIÓN: Filtra productos por categoría y añade
   microinteracción al botón de compra.
   NOTA: Encapsulado para evitar conflictos globales
========================================= */

(() => {
  const botonesFiltro = document.querySelectorAll('#productos .filtro-btn');
  const productos = document.querySelectorAll('#productos .producto-card');

  // Filtrado por categoría
  botonesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      // Actualizar botón activo
      botonesFiltro.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');

      const categoria = btn.dataset.categoria;

      productos.forEach(prod => {
        if (categoria === 'todos' || prod.dataset.categoria === categoria) {
          prod.classList.remove('oculto');
        } else {
          prod.classList.add('oculto');
        }
      });
    });
  });

  // Microinteracción en botón de compra
  const botonesCompra = document.querySelectorAll('#productos .btn-comprar');
  botonesCompra.forEach(boton => {
    boton.addEventListener('click', () => {
      boton.textContent = 'Agregado ✔';
      boton.disabled = true;
      setTimeout(() => {
        boton.textContent = 'Comprar';
        boton.disabled = false;
      }, 2000);
    });
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-banner.animar");
  if (!hero) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hero.classList.add("visible");
        observer.unobserve(hero);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(hero);
});

document.addEventListener("DOMContentLoaded", () => {
  const elementosContacto = document.querySelectorAll(
    ".contact-form, .contact-info"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 200); // retraso escalonado
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elementosContacto.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("btn-top");

  // Mostrar/ocultar según scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  // Scroll suave al hacer clic
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("btn-top");

  // Mostrar/ocultar según scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  // Scroll suave al hacer clic
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
