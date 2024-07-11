import { Database } from "./supabase";

export type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];
