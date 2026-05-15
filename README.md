# Crew Spotter

> The best way to find your friends in crowded places.

App móvil de geolocalización en tiempo real para grupos de amigos en eventos masivos, estaciones de esquí, ciudades turísticas y cualquier entorno concurrido.

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | React Native (Expo) |
| Navegación | React Navigation v6 |
| Mapas | React Native Maps + Google Maps SDK |
| Geolocalización | Expo Location |
| Realidad Aumentada | ViroReact |
| Backend | Node.js + Express |
| Base de datos | Firebase Firestore |
| Autenticación | Firebase Auth (email, Google, Apple) |
| Push notifications | Expo Notifications |
| Estado global | Zustand |

---

## Estructura del proyecto

```
crew-spotter/
├── docs/                         # Documentación del proyecto
│   ├── design-system.md          # Paleta, tipografía, componentes
│   ├── user-flow.md              # Flujo de navegación
│   └── sprint-log.md             # Registro de decisiones
├── src/
│   ├── components/               # Componentes reutilizables
│   ├── screens/
│   │   ├── auth/                 # Splash, Onboarding, Login, Register
│   │   ├── core/                 # Home, Contacts, Create Group, Group Details
│   │   ├── map/                  # Satellite, Compass, AR View
│   │   └── modals/               # Bottom sheets y modales
│   ├── navigation/               # React Navigation config
│   ├── hooks/                    # Custom hooks
│   ├── services/                 # Firebase, API calls
│   ├── store/                    # Zustand state management
│   └── utils/                    # Helpers y constantes
└── assets/
    ├── images/                   # Ilustraciones, onboarding
    └── icons/                    # Logo y iconografía
```

---

## Plataformas

- iOS (iPhone)
- Android

---

## Colores principales

| Token | Hex |
|-------|-----|
| `bg-primary` | `#171C24` |
| `accent` | `#DA4531 → #FEB15F` |
| `brand` | `#348296` |
| `success` | `#34C759` |

Tipografía: **Poppins** (400, 500, 600, 700)

---

## Documentación

- [Design System](./docs/design-system.md)
- [User Flow](./docs/user-flow.md)
- [Sprint Log](./docs/sprint-log.md)

---

## Estado del proyecto

🟡 En desarrollo — MVP fase 1
