/* ============================================================
   CONFIGURACIÓN DE SINCRONIZACIÓN EN LA NUBE (Supabase)
   ------------------------------------------------------------
   1. Crea un proyecto gratis en https://supabase.com
   2. En Project Settings → API copia la "Project URL" y la
      "anon public" key, y pégalas aquí.
   3. Ejecuta supabase_setup.sql en SQL Editor del proyecto.
   Si dejas los valores vacíos, la app funciona igual pero el
   progreso se guarda solo en el navegador (localStorage).
   La anon key es pública por diseño: puede ir en el frontend.
   ============================================================ */
window.APP_CONFIG = {
  SUPABASE_URL: "",        // ej: "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: ""    // ej: "eyJhbGciOiJIUzI1NiIs..."
};
