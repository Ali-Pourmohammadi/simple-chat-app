
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbkkttpbbbywdsujltop.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia2t0dHBiYmJ5d2RzdWpsdG9wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODg2ODY0NiwiZXhwIjoyMDM0NDQ0NjQ2fQ.8P58U8zs9Pz4cPXOR5RQw1pPAVWtVv99Ke24RmVGQCY`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;