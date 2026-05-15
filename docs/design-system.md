# Crew Spotter — Design System
> Versión 1.0 | React Native | iOS & Android

---

## 1. Identidad visual

**Concepto:** App de geolocalización para entornos masivos. Interfaz oscura, outdoor, de uso rápido en condiciones de movimiento y poca atención.

**Principios de diseño:**
- **Claridad ante todo** — la información crítica (ubicación, distancia) debe leerse de un vistazo
- **Dark-first** — fondos oscuros para uso en exteriores y eventos nocturnos
- **Acción rápida** — los CTAs principales siempre visibles, nunca enterrados
- **Sin fricción** — mínimos pasos para las acciones más frecuentes

---

## 2. Paleta de colores

### Fondos
| Nombre | Hex | Uso |
|--------|-----|-----|
| `bg-primary` | `#171C24` | Fondo principal de pantallas |
| `bg-secondary` | `#303030` | Tarjetas, modales, bottom sheets |
| `bg-tertiary` | `#373B42` | Elementos elevados, inputs |

### Marca
| Nombre | Hex | Uso |
|--------|-----|-----|
| `brand-dark` | `#284248` | Azul petróleo oscuro |
| `brand-mid` | `#348296` | Azul petróleo medio, links, highlights |
| `brand-light` | `#BBDADD` | Azul petróleo claro, estados hover |

### Acento (CTA / elementos destacados)
| Nombre | Hex | Uso |
|--------|-----|-----|
| `accent-start` | `#DA4531` | Gradiente acento — inicio |
| `accent-mid` | `#EC7B48` | Gradiente acento — medio |
| `accent-end` | `#FEB15F` | Gradiente acento — fin |

> Gradiente estándar: `linear-gradient(135deg, #DA4531, #FEB15F)`

### Estado / Sistema
| Nombre | Hex | Uso |
|--------|-----|-----|
| `success` | `#34C759` | Usuario activo / online / confirmación |
| `warning` | `#FFE577` | Alertas, avisos |
| `white` | `#FFFFFF` | Textos principales sobre fondo oscuro |
| `gray-mid` | `#999999` | Textos secundarios, placeholders |
| `gray-light` | `#E5E5E5` | Textos terciarios, separadores |
| `black` | `#000000` | Uso puntual sobre fondos claros |

---

## 3. Tipografía

**Familia:** `Poppins` (Google Fonts)
**Pesos usados:** 400 Regular, 500 Medium, 600 SemiBold, 700 Bold

### Escala tipográfica

| Nombre | Tamaño | Peso | Uso |
|--------|--------|------|-----|
| `display` | 28px / 1.75rem | 700 | Títulos de onboarding |
| `heading-lg` | 22px / 1.375rem | 600 | Títulos de pantalla |
| `heading-md` | 18px / 1.125rem | 600 | Encabezados de sección |
| `heading-sm` | 16px / 1rem | 600 | Subtítulos, nombres de grupo |
| `body-lg` | 16px / 1rem | 400 | Texto principal |
| `body-md` | 14px / 0.875rem | 400 | Texto secundario, descripciones |
| `body-sm` | 12px / 0.75rem | 400 | Labels, captions, metadata |
| `label` | 13px / 0.8125rem | 500 | Etiquetas de botones, badges |
| `mono` | 13px / 0.8125rem | 400 | Coordenadas, datos técnicos |

---

## 4. Espaciado

Sistema basado en múltiplos de **4px**.

| Token | Valor | Uso |
|-------|-------|-----|
| `space-1` | 4px | Micro-gaps internos |
| `space-2` | 8px | Gaps entre elementos relacionados |
| `space-3` | 12px | Padding interno de componentes pequeños |
| `space-4` | 16px | Padding estándar, gaps entre componentes |
| `space-5` | 20px | Separación entre secciones |
| `space-6` | 24px | Padding de tarjetas |
| `space-8` | 32px | Separación entre bloques mayores |
| `space-10` | 40px | Padding de pantalla horizontal |

---

## 5. Bordes y radios

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-sm` | 8px | Badges, chips, inputs |
| `radius-md` | 12px | Botones, tarjetas pequeñas |
| `radius-lg` | 16px | Tarjetas, bottom sheets |
| `radius-xl` | 24px | Modales, cards principales |
| `radius-full` | 9999px | Avatares, FABs, pills |

---

## 6. Componentes base

### Botón primario
- Background: gradiente `#DA4531 → #FEB15F`
- Texto: `#FFFFFF`, Poppins 600, 16px
- Padding: `14px 24px`
- Border radius: `radius-md` (12px)
- Estado disabled: opacidad 40%

### Botón secundario
- Background: `transparent`
- Border: `1.5px solid #348296`
- Texto: `#348296`, Poppins 600, 16px
- Padding: `14px 24px`
- Border radius: `radius-md` (12px)

### Input de texto
- Background: `#373B42`
- Border: `1px solid transparent` → `1px solid #348296` (focus)
- Texto: `#FFFFFF`, Poppins 400, 16px
- Placeholder: `#999999`
- Padding: `14px 16px`
- Border radius: `radius-sm` (8px)

### Avatar de usuario
- Forma: círculo `radius-full`
- Tamaños: 32px (lista), 48px (detalle), 64px (perfil)
- Indicador online: punto `#34C759`, 10px, borde 2px `#171C24`

### Badge de distancia
- Background: `rgba(0,0,0,0.6)`
- Texto: `#FFFFFF`, Poppins 500, 12px
- Padding: `4px 8px`
- Border radius: `radius-sm`

---

## 7. Iconografía

- Sistema: **SF Symbols** (iOS) / **Material Icons** (Android)
- Tamaños: 20px (inline), 24px (navegación), 28px (acciones principales)
- Color por defecto: `#FFFFFF`
- Color inactivo: `#999999`
- Color acento: `#FEB15F`

---

## 8. Navegación

### Bottom Tab Bar
- Background: `#303030` con blur
- Altura: 83px (incluyendo safe area)
- Tabs: Home, Grupos, Mapa, Perfil
- Icono activo: `#FEB15F`
- Icono inactivo: `#999999`
- Label: Poppins 500, 10px

### Top Bar
- Background: `#171C24`
- Título: Poppins 600, 18px, `#FFFFFF`
- Botones laterales: iconos 24px, `#FFFFFF`

---

## 9. Vistas del mapa

### Vista Satélite
- Mapa base: Google Maps / Mapbox (dark theme)
- Marcadores de usuario: avatar circular + anillo de color por grupo
- Punto de encuentro: pin con gradiente acento

### Vista Brújula
- Fondo: `#171C24`
- Indicadores direccionales: tarjetas con nombre + distancia + avatar
- Norte: indicador `#DA4531`

### Vista Realidad Aumentada
- Overlay: transparente sobre cámara
- Tags de usuario: fondo `rgba(23,28,36,0.85)` + nombre + distancia
- Dirección: flecha con gradiente acento

---

## 10. Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | React Native (Expo) |
| Navegación | React Navigation v6 |
| Mapas | React Native Maps + Google Maps SDK |
| Geolocalización | Expo Location |
| Realidad Aumentada | ViroReact / React Native AR |
| Backend | Node.js + Express |
| Base de datos | Firebase Firestore (tiempo real) |
| Autenticación | Firebase Auth (email, Google, Apple Sign In) |
| Push notifications | Expo Notifications |
| Estado global | Zustand |

---

## 11. Arquitectura de navegación

### Bottom Tab Bar (5 tabs)
| Tab | Icono | Pantalla | Notas |
|-----|-------|----------|-------|
| 1 | Home | Lista de grupos | Tab por defecto al entrar |
| 2 | Contacts | Contactos | Tabs internas: Crewspotters / Invitar |
| 3 | + New Group | Crear grupo | Acción central |
| 4 | Settings | Ajustes | Pendiente de diseño |
| 5 | Profile | Perfil | Pendiente de diseño |

### Tab Contacts — estructura interna
- **Tab 1 — My Crewspotters:** usuarios que ya están registrados en Crew Spotter y están en la agenda del usuario. Acciones: ver perfil, añadir a grupo.
- **Tab 2 — Invite contacts:** contactos del teléfono que NO están en Crew Spotter. Acción: enviar invitación para que se registren (SMS / link).

### Regla de grupos
- **Siempre grupos**, aunque solo haya 2 participantes. No existe el tracking individual.
- Mínimo de participantes por grupo: 2 (el creador + 1 persona).

---

## 12. Pantallas del MVP

### Auth
1. Splash 01 — logo animado
2. Splash 02 — logo expand
3. Onboarding 1 — Welcome
4. Onboarding 2 — Find quickly
5. Onboarding 3 — Friends radar
6. Onboarding 4 — Create a group
7. Register — email + tel. + Google/Facebook
8. Login — tab toggle con Register
9. Forgot password — enviar código
10. Forgot password –1 — nueva contraseña

### Core
11. Home — listado de grupos activos *(a mejorar en próximo sprint)*
12. Contacts — Tab 1: My Crewspotters
13. Contacts — Tab 2: Invite contacts
14. Create a Group — selección de Crewspotters
15. Create a Group — Invite contacts (no registrados)
16. Selection — selección con previews en header
17. Last step 01 — nombre + icono + location (vacío)
18. Last step 02 — nombre + icono + location (relleno)
19. Last step –1 — confirmación + Create Group btn
20. Group Details — info + miembros + mapa preview
21. Edit Group — edición del grupo existente

### Mapa
22. Group Map — Satellite View
23. Group Map — Compass (sin selección)
24. Group Map — Compass (avatar seleccionado, estados 02–05)
25. Group Map — AR View (múltiples usuarios)
26. Group Map — AR View Focus (un usuario)

### Modales / Bottom sheets
27. Add meeting point — bottom sheet (Use my location / Add manually)
28. Send invitation? — modal confirm
29. Individual tracking? — *ELIMINADO*
30. Group bottom sheet — Add to group / Create new group
31. Modal Facebook — Continue with Facebook
32. Modal Google — Continue with Google

### Pendientes de diseño
33. Profile — pendiente
34. Settings — pendiente

---

*Documento vivo — se actualiza con cada sprint.*
