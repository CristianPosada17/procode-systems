export const services = [
  {
    slug: "redes-empresariales",
    title: "Redes e internet empresarial",
    eyebrow: "Conectividad estable para tu operación",
    description:
      "Diseñamos, configuramos y optimizamos redes de internet para oficinas, negocios y espacios de trabajo que necesitan conexión estable, ordenada y preparada para crecer.",
    problem:
      "Muchas empresas trabajan con redes improvisadas: routers mal ubicados, señal débil, equipos saturados, cables desordenados y usuarios con fallas constantes de conexión.",
    solution:
      "En ProCode Systems analizamos tu espacio, cantidad de usuarios, dispositivos conectados y operación diaria para diseñar una red más estable, funcional y profesional.",
    includes: [
      "Diagnóstico de red actual",
      "Diseño de distribución de red",
      "Configuración de routers y switches",
      "Optimización de puntos de acceso WiFi",
      "Organización básica de equipos de red",
      "Pruebas de conectividad y estabilidad",
    ],
    benefits: [
      "Menos caídas de internet",
      "Mejor cobertura WiFi",
      "Conexión más estable para equipos de trabajo",
      "Red preparada para crecimiento",
    ],
  },
  {
    slug: "cableado-estructurado",
    title: "Cableado estructurado",
    eyebrow: "Instalaciones limpias, ordenadas y funcionales",
    description:
      "Instalamos y organizamos cableado de red para oficinas, negocios y espacios operativos que necesitan una infraestructura física más clara, segura y preparada para mantenimiento.",
    problem:
      "Un cableado mal instalado genera fallas difíciles de detectar, conexiones inestables, mala imagen, pérdida de tiempo y problemas al momento de crecer o dar mantenimiento.",
    solution:
      "Diseñamos una distribución de cableado más limpia y funcional, considerando puntos de red, rutas, equipos, racks y necesidades reales de operación.",
    includes: [
      "Planeación de puntos de red",
      "Tendido de cableado estructurado",
      "Organización de rutas de cable",
      "Etiquetado básico de conexiones",
      "Conexión a switches o patch panel",
      "Pruebas de funcionamiento",
    ],
    benefits: [
      "Instalación más profesional",
      "Mantenimiento más sencillo",
      "Menos fallas por cables desordenados",
      "Infraestructura lista para crecer",
    ],
  },
  {
    slug: "racks-organizacion",
    title: "Racks y organización técnica",
    eyebrow: "Tu infraestructura técnica en orden",
    description:
      "Organizamos racks, switches, routers, patch panels y cableado para que tu infraestructura sea más fácil de entender, mantener y escalar.",
    problem:
      "Cuando los equipos de red están desordenados, cada falla se vuelve más difícil de resolver. Nadie sabe qué cable va a dónde, qué equipo controla qué área o qué se puede desconectar sin afectar la operación.",
    solution:
      "Ordenamos la estructura técnica de tu negocio para que cada equipo, cable y conexión tenga un lugar claro dentro de tu operación.",
    includes: [
      "Revisión de equipos actuales",
      "Organización de rack",
      "Acomodado de routers, switches y accesorios",
      "Separación y orden de cableado",
      "Identificación básica de conexiones",
      "Recomendaciones de mejora",
    ],
    benefits: [
      "Rack más limpio y profesional",
      "Menos tiempo para resolver fallas",
      "Mayor claridad técnica",
      "Mejor imagen operativa",
    ],
  },
  {
    slug: "configuracion-equipos",
    title: "Configuración de equipos",
    eyebrow: "Equipos conectados correctamente",
    description:
      "Configuramos routers, switches, puntos de acceso, cámaras, impresoras, computadoras y dispositivos conectados para que trabajen correctamente dentro de tu red.",
    problem:
      "Muchos problemas técnicos no vienen del equipo en sí, sino de una mala configuración: IPs, accesos, red WiFi, permisos, conexión entre dispositivos o saturación de red.",
    solution:
      "Revisamos y configuramos tus equipos para que funcionen de forma más estable y alineada a la operación real de tu negocio.",
    includes: [
      "Configuración de routers",
      "Configuración básica de switches",
      "Puntos de acceso WiFi",
      "Conexión de impresoras y dispositivos",
      "Configuración de cámaras o equipos de red",
      "Pruebas de funcionamiento",
    ],
    benefits: [
      "Equipos mejor conectados",
      "Menos errores de configuración",
      "Mayor estabilidad operativa",
      "Mejor aprovechamiento de tus dispositivos",
    ],
  },
  {
    slug: "soporte-tecnico",
    title: "Soporte técnico",
    eyebrow: "Solución de problemas técnicos",
    description:
      "Damos soporte técnico para resolver fallas de red, equipos, conexión, configuración y problemas operativos relacionados con la infraestructura tecnológica de tu negocio.",
    problem:
      "Cuando algo falla, la operación se detiene: internet lento, impresoras que no conectan, cámaras caídas, computadoras sin red o equipos que nadie sabe revisar.",
    solution:
      "Te ayudamos a diagnosticar el problema, encontrar la causa y aplicar una solución clara para que tu negocio pueda seguir operando.",
    includes: [
      "Diagnóstico de fallas",
      "Revisión de red",
      "Revisión de equipos conectados",
      "Solución de problemas de configuración",
      "Recomendaciones preventivas",
      "Soporte presencial o remoto según el caso",
    ],
    benefits: [
      "Menos tiempo perdido por fallas",
      "Diagnóstico más claro",
      "Soluciones prácticas",
      "Mayor continuidad operativa",
    ],
  },
  {
    slug: "procesos-digitales",
    title: "Procesos y sistemas digitales",
    eyebrow: "Orden digital para tu operación",
    description:
      "Ayudamos a estructurar procesos digitales para que tu negocio tenga mayor control de tareas, seguimiento, información, clientes y actividades internas.",
    problem:
      "Muchos negocios operan con información dispersa: mensajes en WhatsApp, tareas sin seguimiento, archivos desordenados y procesos que dependen demasiado de la memoria de las personas.",
    solution:
      "Creamos estructuras digitales simples y funcionales para ordenar tareas, información y flujos de trabajo dentro de tu operación.",
    includes: [
      "Diagnóstico de procesos actuales",
      "Mapeo de flujo de trabajo",
      "Organización de información",
      "Estructura básica de seguimiento",
      "Recomendación de herramientas digitales",
      "Implementación inicial de procesos",
    ],
    benefits: [
      "Más claridad operativa",
      "Menos tareas perdidas",
      "Mejor seguimiento interno",
      "Procesos más fáciles de repetir",
    ],
  },
] as const;

export type Service = (typeof services)[number];