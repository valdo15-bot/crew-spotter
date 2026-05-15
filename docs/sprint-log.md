# Crew Spotter — Sprint Log
> Registro de decisiones, cambios y acuerdos del proyecto

---

## Sprint 0 — Setup y definición (Mayo 2025)

### Decisiones tomadas

**Producto**
- ✅ MVP sin monetización — objetivo: tracción y volumen de usuarios
- ✅ Individual tracking eliminado — siempre grupos, mínimo 2 participantes
- ✅ Plataformas: iOS + Android simultáneo con React Native (Expo)

**Diseño**
- ✅ Tipografía: Poppins (400, 500, 600, 700)
- ✅ Paleta definida — dark-first, acento naranja-rojo (#DA4531 → #FEB15F)
- ✅ 43 pantallas revisadas del prototipo XD
- ✅ Profile y Settings — pendientes de diseño (baja prioridad MVP)

**Arquitectura**
- ✅ Backend: Firebase (Auth + Firestore)
- ✅ Estado global: Zustand
- ✅ Navegación: React Navigation v6

**Navegación**
- ✅ Bottom Tab Bar: Home · Contacts · New Group · Settings · Profile
- ✅ Contacts Tab 1: My Crewspotters (ya registrados)
- ✅ Contacts Tab 2: Invite contacts (contactos del teléfono no registrados)

### Pendientes para Sprint 1
- [ ] Diseño mejorado de Home
- [ ] Arrancar desarrollo: Auth screens (Splash → Onboarding → Login/Register)

---

## Sprint 1 — (próximo)

_Por definir_

### Cambios de diseño
- ✅ Facebook Sign In → eliminado
- ✅ Login social: solo Google + Apple Sign In
- Motivo: Apple Sign In es obligatorio en iOS cuando se ofrecen opciones de login social. Más limpio y confiable que Facebook.
