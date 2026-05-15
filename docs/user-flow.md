# Crew Spotter — User Flow
> Versión 1.1 | Actualizado tras revisión del prototipo XD

---

## Reglas de navegación

- **Siempre grupos** — no existe tracking individual. Mínimo 2 participantes.
- **Bottom Tab Bar** — 5 tabs: Home · Contacts · New Group · Settings · Profile
- **Individual tracking** — eliminado del MVP

---

## Flujo 1 — Primer acceso

```
Splash 01 → Splash 02 → Onboarding 1 → Onboarding 2 → Onboarding 3 → Onboarding 4
```

---

## Flujo 2 — Registro / Login

### Registro
```
Register (email + tel.) → [Modal Google | Modal Apple] → Home
```

### Login
```
Login → Home
```

### Recuperar contraseña
```
Login → Forgot password (código) → Forgot password –1 (nueva pw.) → Login
```

---

## Flujo 3 — Home

Home = listado de grupos activos del usuario.

```
Home → Group Details → Group Map (Satellite View)
Home → [Accept invite? modal ✓/✗]
```

---

## Flujo 4 — Crear grupo

```
+ New Group (tab bar)
  → Create a Group (My Crewspotters tab)
    → Selection (avatares seleccionados en header)
      → Last step 01 (nombre + icono + location vacío)
        → Last step 02 (relleno)
          → Last step –1 (Create Group btn)
            → Home (grupo creado)

Create a Group → Invite contacts tab
  → [Send invitation? modal confirm]
```

### Desde Contacts
```
Contacts → [Group bottom sheet: Add to group / Create new group]
```

---

## Flujo 5 — Vistas del mapa

```
Group Map
  ├── Satellite View (tab activo por defecto)
  │     └── [Add meeting point bottom sheet]
  │           → Satellite View + pin
  ├── Compass
  │     ├── Compass 01 (sin selección)
  │     └── Compass 02–05 (avatar seleccionado + distancia)
  └── AR View
        ├── AR View (múltiples usuarios)
        └── AR View Focus (un usuario seleccionado)
```

---

## Flujo 6 — Gestión de grupo

```
Group Details → Edit Group → Group Details (guardado)
Group Details → + Add member → [Send invitation? modal]
```

---

## Tab Contacts

| Tab | Contenido | Acción |
|-----|-----------|--------|
| My Crewspotters | Usuarios registrados en Crew Spotter en la agenda | Ver perfil · Añadir a grupo |
| Invite contacts | Contactos del teléfono NO registrados | Enviar invitación de registro (SMS / link) |

---

## Pantallas pendientes de diseño

| Pantalla | Prioridad |
|----------|-----------|
| Profile | Media |
| Settings | Media |
| Home mejorada | Alta — próximo sprint |
