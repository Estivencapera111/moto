
// IMPORTAR CREATE CLIENT
const { createClient } = supabase;

// URL DEL PROYECTO
const SUPABASE_URL = 'https://ohbdinhmbhusmgahkkmg.supabase.co';

// API KEY
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oYmRpbmhtYmh1c21nYWhra21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTU4MjksImV4cCI6MjA5MzgzMTgyOX0.8Mdd98ynS5DsQY2kFxtLndzeUlXUqLaeRmDbDaPjQ-A';

// CREAR CLIENTE
const client = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);